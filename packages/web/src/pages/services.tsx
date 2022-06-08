import dynamic from "next/dynamic";

const Head = dynamic(() => import("../modules/seo/head"));
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Heading } from "../components/heading";
import { Button } from "../components/button";
import { Link } from "../components/link";

import { services } from "../lib/services";

import styles from "../styles/pages/home.module.scss";

const Services: React.FC = () => {
  return (
    <>
      <Head title="ROT, ROT13" />

      <Header />

      <main>
        <ul className={styles.serviceList} style={{ transform: "none" }}>
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

export default Services;
