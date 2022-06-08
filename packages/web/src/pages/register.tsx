import { useCallback, useRef, useState, useContext, FormEvent } from "react";
import dynamic from "next/dynamic";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/router";

import { AuthContext } from "../context/auth";

const Head = dynamic(() => import("../modules/seo/head"));
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Heading } from "../components/heading";
import { Link } from "../components/link";
import { Button } from "../components/button";
import Input, { InputHandles } from "../components/input";

import styles from "../styles/pages/register.module.scss";

type AccountType = "business" | "client";

const Register: React.FC = () => {
  const { handleRegister } = useContext(AuthContext);
  const { push } = useRouter();

  const accountType = useRef<AccountType>("client");
  const [step, setStep] = useState(0);
  const [formFilled, setFormFilled] = useState(false);

  const usernameInput = useRef<InputHandles>(null);
  const emailInput = useRef<InputHandles>(null);
  const passwordInput = useRef<InputHandles>(null);

  const checkMissingValues = () => {
    if (
      !!usernameInput.current?.value &&
      !!emailInput.current?.value &&
      !!passwordInput.current?.value
    ) {
      setFormFilled(true);
      return;
    }

    setFormFilled(false);
  };

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (!accountType.current) {
        return;
      }

      const register = await handleRegister({
        username: usernameInput.current?.value || "",
        email: emailInput.current?.value || "",
        password: passwordInput.current?.value || "",
        type: accountType.current,
      });
      console.log(register);
      if (register?.error) {
        switch (register.error.field) {
          case "username": {
            usernameInput.current?.setState("error");
            usernameInput.current?.setMessage(register.error.message);
            break;
          }

          case "email": {
            emailInput.current?.setState("error");
            emailInput.current?.setMessage(register.error.message);
            break;
          }
        }

        return;
      }

      push("/dashboard");
    },
    [handleRegister, push]
  );

  return (
    <>
      <Head title="Create your account now" />

      <Header />

      <header className={styles.header}>
        <Heading variant="title">Create your Encryptr account now</Heading>
        <Heading variant="subtitle">
          And gain access to free not cloud storage. But first, who are you?
        </Heading>
      </header>

      {step === 0 && (
        <main className={styles.cardList}>
          <div className={styles.card}>
            <Heading variant="subtitle">I want Encryptr for my company</Heading>

            <Heading variant="text">
              Enjoy special deals and features for your company
            </Heading>

            <Button
              onClick={() => {
                accountType.current = "business";
                setStep((step) => step + 1);
              }}
              variant="primary"
            >
              Create Business Plan
            </Button>
          </div>

          <div className={styles.card}>
            <Heading variant="subtitle">I want Encryptr for myself</Heading>

            <Heading variant="text">Enjoy not could storage features</Heading>

            <Button
              onClick={() => {
                accountType.current = "client";
                setStep((step) => step + 1);
              }}
              variant="primary"
            >
              Create Personal Plan
            </Button>
          </div>
        </main>
      )}

      {step === 1 && (
        <section className={styles.formSection}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Username"
              placeholder="ex: @VitorGouveia"
              ref={usernameInput}
              handleInputChange={checkMissingValues}
            />
            <Input
              label="E-mail"
              placeholder="ex: john.doe@gmail.com"
              type="email"
              ref={emailInput}
              handleInputChange={checkMissingValues}
            />
            <Input
              label="Password"
              type="password"
              handleInputChange={checkMissingValues}
              rightIcon={
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    passwordInput.current?.setType(() => {
                      if (passwordInput.current?.type === "password") {
                        return "text";
                      }
                      return "password";
                    })
                  }
                >
                  {passwordInput.current?.type === "text" ? (
                    <FiEyeOff />
                  ) : (
                    <FiEye />
                  )}
                </span>
              }
              placeholder="************"
              ref={passwordInput}
            />
            <Button disabled={!formFilled} variant="primary">
              Create my account now
            </Button>
          </form>
        </section>
      )}

      <div className={styles.hasAnAccountLink}>
        <Link href="/login">I already have an account</Link>
      </div>

      <Footer />
    </>
  );
};

export default Register;
