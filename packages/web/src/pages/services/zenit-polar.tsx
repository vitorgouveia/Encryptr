import React, { useCallback, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { FiTrash } from "react-icons/fi";

const Head = dynamic(() => import("../../modules/seo/head"));
import { Header } from "../../components/header";
import { Heading } from "../../components/heading";
import Input, { InputHandles } from "../../components/input";
import { Footer } from "../../components/footer";
import { Button } from "../../components/button";

import { DefaultZenitPolar } from "@encryptr/core";

import zenitStyles from "../../styles/pages/service/zenit.module.scss";
import styles from "../../styles/pages/service/service.module.scss";

const Service: React.FC = () => {
  const [value, setValue] = useState("");
  const KeyInput = useRef<InputHandles>(null);
  const ZenitInput = useRef<InputHandles>(null);
  const ResultInput = useRef<InputHandles>(null);
  const [keys, setKeys] = useState<string[]>([]);

  return (
    <>
      <Head title="Zenit" />

      <Header />

      <main className={styles.container}>
        <header>
          <Heading weight="bold" variant="title">
            ZenitPolar
          </Heading>

          <Heading variant="text">Default ZenitPolar</Heading>
        </header>

        <section>
          <Input
            variant="textarea"
            type="text"
            handleInputChange={async (event) => {
              const zenit = new DefaultZenitPolar();

              setValue(await zenit.execute(event.target.value));
            }}
            ref={ZenitInput}
            placeholder=""
            style={{ width: "100%" }}
          />

          <Input
            style={{ width: "100%" }}
            variant="textarea"
            label="Result"
            type="text"
            handleInputChange={async (event) => {
              const zenit = new DefaultZenitPolar();
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
