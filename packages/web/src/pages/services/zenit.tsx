import React, { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { FiTrash } from "react-icons/fi";

const Head = dynamic(() => import("../../modules/seo/head"));
import { Header } from "../../components/header";
import { Heading } from "../../components/heading";
import Input, { InputHandles } from "../../components/input";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

import { Zenit } from "@encryptr/core";

import zenitStyles from "../../styles/pages/service/zenit.module.scss";
import styles from "../../styles/pages/service/service.module.scss";

const Service: React.FC = () => {
  // const handle
  const [value, setValue] = useState("");
  const KeyInput = useRef<InputHandles>(null);
  const ZenitInput = useRef<InputHandles>(null);
  const ResultInput = useRef<InputHandles>(null);
  const [keys, setKeys] = useState<string[]>([]);
  const [formFilled, setFormFilled] = useState(false);

  const handleAddKey = useCallback(async () => {
    if (!KeyInput.current?.value) {
      return;
    }

    const wordNotBigEnough = KeyInput.current.value.length < 5;
    const tooBig = KeyInput.current.value.length > 5;

    if (wordNotBigEnough) {
      KeyInput.current?.setState("warning");
      KeyInput.current?.setMessage("Word not big enough");
      return;
    }

    if (tooBig) {
      KeyInput.current?.setState("warning");
      KeyInput.current?.setMessage("Word too big");
      return;
    }

    const wordAlreadyExists = keys.find(
      (key) => KeyInput.current?.value === key
    );

    if (wordAlreadyExists) {
      KeyInput.current?.setState("error");
      KeyInput.current?.setMessage("That word is already on the list");
      return;
    }

    const value = KeyInput.current.value;

    setKeys((keys) => [...keys, value]);

    KeyInput.current?.setValue("");

    if (keys.length + 1 > 1) {
      ZenitInput.current?.setDisabled(false);
      ResultInput.current?.setDisabled(false);
    }

    const zenit = new Zenit({
      keys: [...keys, value],
    });

    if (ZenitInput.current?.value) {
      const v = await zenit.execute(ZenitInput.current.value);
      setValue(v);
    }
  }, [keys]);

  const handleRemoveKey = useCallback(
    async (key: string) => {
      setKeys((keys) => keys.filter((_key) => _key !== key));

      const adjustedLength = keys.length - 1;
      if (adjustedLength <= 1) {
        ZenitInput.current?.setDisabled(true);
        ResultInput.current?.setDisabled(true);
      } else {
        const zenit = new Zenit({
          keys: keys.filter((_key) => _key !== key),
        });

        if (ZenitInput.current?.value) {
          const v = await zenit.execute(ZenitInput.current.value);
          setValue(v);
        }
      }
    },
    [keys]
  );

  return (
    <>
      <Head title="Zenit" />

      <Header />

      <main className={styles.container}>
        <header>
          <Heading weight="bold" variant="title">
            Zenit
          </Heading>

          <Heading variant="text">Customizable Zenit</Heading>
          <Heading variant="text">Add 2 or more keys for Zenit to work</Heading>
        </header>

        <section>
          <form
            className={zenitStyles.form}
            onSubmit={(event) => {
              event.preventDefault();

              handleAddKey();
            }}
          >
            <Input
              ref={KeyInput}
              label="Insert Key"
              placeholder="any 5 letter word"
              type="text"
            />
            <Button onClick={handleAddKey} variant="outlined">
              Add +
            </Button>
          </form>

          <ul className={zenitStyles.tagList}>
            {keys.map((key) => (
              <li key={key}>
                <Heading variant="text" weight="bold">
                  {key}
                </Heading>
                <button onClick={() => handleRemoveKey(key)}>
                  <FiTrash size={24} />
                </button>
              </li>
            ))}
          </ul>

          <Input
            variant="textarea"
            type="text"
            disabled={!formFilled}
            handleInputChange={async (event) => {
              const zenit = new Zenit({
                keys,
              });

              setValue(await zenit.execute(event.target.value));
            }}
            ref={ZenitInput}
            placeholder=""
            style={{ width: "100%" }}
          />

          <Input
            disabled={!formFilled}
            style={{ width: "100%" }}
            variant="textarea"
            label="Result"
            type="text"
            handleInputChange={async (event) => {
              const zenit = new Zenit({
                keys,
              });
              setValue(event.target.value);
              ZenitInput.current?.setValue(
                await zenit.execute(event.target.value)
              );
            }}
            ref={ResultInput}
            value={value}
            placeholder=""
          />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Service;
