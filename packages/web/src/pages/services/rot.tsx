import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const Head = dynamic(() => import("../../modules/seo/head"));
import { Header } from "../../components/header";
import { Heading } from "../../components/heading";
import Input, { InputHandles } from "../../components/input";
import { Footer } from "../../components/footer";

import { ROT } from "@encryptr/core";

import styles from "../../styles/pages/service/service.module.scss";

const ROTService: React.FC = () => {
  const [skip, setSkip] = useState(13);
  const [value, setValue] = useState("");
  const ROTInput = useRef<InputHandles>(null);
  const ResultInput = useRef<InputHandles>(null);

  return (
    <>
      <Head title="ROT, ROT13" />

      <Header />

      <main className={styles.container}>
        <header>
          <Heading weight="bold" variant="title">
            ROT
          </Heading>

          <Heading variant="text">ROT Translator, every single ROT</Heading>
        </header>

        <section>
          <Input
            value={skip}
            label="Skip"
            type="number"
            min={1}
            handleInputChange={async (event) => {
              setSkip(Number(event.target.value));
              const rot = new ROT({
                skip: Number(event.target.value),
              });

              setValue(await rot.execute(ROTInput.current?.value || ""));
            }}
            placeholder="Range 0-∞"
          />

          <Input
            variant="textarea"
            type="text"
            handleInputChange={async (event) => {
              const rot = new ROT({
                skip: skip,
              });

              setValue(await rot.execute(event.target.value));
            }}
            ref={ROTInput}
            placeholder=""
            style={{ width: "100%" }}
          />

          <Input
            style={{ width: "100%" }}
            variant="textarea"
            label="Result"
            type="text"
            handleInputChange={async (event) => {
              const rot = new ROT({
                skip: skip,
              });
              setValue(event.target.value);
              ROTInput.current?.setValue(await rot.execute(event.target.value));
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

export default ROTService;
