import dynamic from "next/dynamic";
import { FiSearch } from "react-icons/fi";

const Head = dynamic(() => import("../../modules/seo/head"));
import { Sidebar } from "../../components/sidebar";
import Input, { InputHandles } from "../../components/input";
import { Heading } from "../../components/heading";
import { Cog } from "../../icon/cog";

import styles from "../../styles/pages/dashboard/home.module.scss";

const Dashboard: React.FC = () => {
  return (
    <>
      <Head title="Files" defaultTitle="Dashboard Encryptr" />

      <main className={styles.container}>
        <Sidebar />

        <section>
          <header>
            <Input leftIcon={<FiSearch />} placeholder="Search Anything" />
          </header>

          <div>
            <Heading
              weight="bold"
              variant="small"
              className={styles.headingMuted}
            >
              Dashboard
            </Heading>

            <span className={styles.cog}>
              <Cog />
            </span>

            <Heading
              weight="bold"
              variant="small"
              className={styles.headingActive}
            >
              Files
            </Heading>
          </div>
        </section>

        <div>
          <Heading variant="small" weight="bold">
            Folders
          </Heading>
          <ul>
            <li>FolderName</li>
          </ul>
        </div>

        <div>
          <Heading variant="small" weight="bold">
            Files
          </Heading>
          <ul>
            <li>FileName</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
