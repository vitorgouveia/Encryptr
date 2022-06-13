import dynamic from "next/dynamic";
import { useContext } from "react";

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

const Profile: React.FC = () => {
  const { push } = useRouter();
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <>
      <Head title="Profile" defaultTitle="Dashboard Encryptr" />

      <main className={styles.container}>
        <Sidebar />

        <section className={ServiceStyles.container}>
          <header>
            <Heading weight="bold" variant="title">
              Hi there @{user?.username}
            </Heading>

            <Heading variant="text">This is your profile</Heading>
          </header>

          <section
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--size-700)",
            }}
          >
            <Link href="/dashboard/data">Download My Data</Link>

            <Button
              onClick={() => {
                handleLogout();
                push("/");
              }}
              className={createStyles.buttonRed}
              variant="primary"
            >
              Logout
            </Button>
          </section>
        </section>
      </main>
    </>
  );
};

export default Profile;
