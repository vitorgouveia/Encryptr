import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Head = dynamic(() => import("../modules/seo/head"));
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Heading } from "../components/heading";
import { Link } from "../components/link";
import { Button } from "../components/button";

import { services } from "../lib/services";

import styles from "../styles/pages/home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <Head title="Services" />

      <Header />

      <main>
        <section className={styles.hero}>
          <Heading variant="title">
            Cryptographic tools for all your needs
          </Heading>
          <Heading variant="subtitle">
            Free and Online tool to secure your files and secret messages. Enjoy
            next-level encrypting software.
          </Heading>
          <Heading variant="small">
            <Link global={true} href="https://unsplash.com/@flyd2069">
              Image by FLY:D from Unsplash
            </Link>
          </Heading>
        </section>

        <ul className={styles.serviceList}>
          {services.map(({ title, href, description }) => (
            <li key={href}>
              <Heading variant="text">
                <strong>{title}</strong>
              </Heading>
              <Heading variant="small">{description}</Heading>

              <Link href={href}>
                <Button variant="primary">use {title}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Home;
