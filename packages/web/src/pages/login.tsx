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

import styles from "../styles/pages/login.module.scss";

const Login: React.FC = () => {
  const { handleLogin } = useContext(AuthContext);
  const { push } = useRouter();

  const [formFilled, setFormFilled] = useState(false);

  const loginInput = useRef<InputHandles>(null);
  const passwordInput = useRef<InputHandles>(null);

  const checkMissingValues = () => {
    if (!!loginInput.current?.value && !!passwordInput.current?.value) {
      setFormFilled(true);
      return;
    }

    setFormFilled(false);
  };

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      console.log("bruh");
      const login = await handleLogin({
        login: loginInput.current?.value || "",
        password: passwordInput.current?.value || "",
      });

      if (login?.error) {
        switch (login.error.field) {
          case "login": {
            loginInput.current?.setState("error");
            loginInput.current?.setMessage(login.error.message);
            break;
          }

          case "password": {
            passwordInput.current?.setState("error");
            passwordInput.current?.setMessage(login.error.message);
            break;
          }
        }

        return;
      }

      push("/dashboard");
    },
    [handleLogin, push]
  );

  return (
    <>
      <Head title="Enter your account now" />

      <Header />

      <div className={styles.container}>
        <aside className={styles.bannerImage}>
          <div></div>
          {/* <img src="/lock.jpg" alt="" /> */}
        </aside>

        <section className={styles.formSection}>
          <Heading variant="title">Enter your account</Heading>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Login"
              placeholder="ex: ID, email or username"
              ref={loginInput}
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

          <div className={styles.hasAnAccountLink}>
            <Link href="/register">
              You {"don't"} have an account? No problem, just create one now!
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Login;
