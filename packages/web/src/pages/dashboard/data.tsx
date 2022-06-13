import dynamic from "next/dynamic";
import { useCallback, useContext, useEffect, useState } from "react";

const Head = dynamic(() => import("../../modules/seo/head"));
import { Sidebar } from "../../components/sidebar";
import { Heading } from "../../components/heading";
import { Button } from "../../components/button";

import { Link } from "../../components/link";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";

import styles from "../../styles/pages/dashboard/home.module.scss";
import ServiceStyles from "../../styles/pages/service/service.module.scss";
import createStyles from "../../styles/pages/dashboard/folder/create.module.scss";
import { save } from "../../lib/save-file";

const MyData: React.FC = () => {
  const { push } = useRouter();
  const { user, handleLogout } = useContext(AuthContext);
  const [localStorageSizeInKB, setLocalStorageSizeInKB] =
    useState<number | null>(null);

  useEffect(() => {
    const getLocalStorageSpace = () => {
      let allStrings = "";

      let keys: string[] = [];

      for (const key in localStorage) {
        if (localStorage.hasOwnProperty(key) && key.includes("@encryptr")) {
          keys.push(key);
          allStrings += localStorage[key];
        }
      }

      const size = 3 + (allStrings.length * 16) / (8 * 1024);

      return {
        size: size,
        keys,
      };
    };

    const { size } = getLocalStorageSpace();

    setLocalStorageSizeInKB(size);
  }, []);

  const handleGenerateAndDownloadUserData = useCallback(() => {
    const filename = `${user?.username || "user"}-data.json`;

    save({
      filename,
      data: JSON.stringify(user, null, 2),
    });
  }, [user]);

  return (
    <>
      <Head title="Download My Data" defaultTitle="Dashboard Encryptr" />

      <main className={styles.container}>
        <Sidebar />

        <section className={ServiceStyles.container}>
          <header>
            <Heading weight="bold" variant="title">
              Hello again @{user?.username}
            </Heading>

            <Heading variant="text">
              So you want to be the owner of you data for once in your life?
              okay then, here you go...
            </Heading>

            <Heading variant="text">
              Your data weights about {localStorageSizeInKB?.toFixed(1)}KB
            </Heading>
          </header>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--size-700)",
            }}
          >
            <Button
              onClick={handleGenerateAndDownloadUserData}
              variant="primary"
            >
              Download My Data
            </Button>
          </section>
        </section>
      </main>
    </>
  );
};

export default MyData;
