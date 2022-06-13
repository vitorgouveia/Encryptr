import dynamic from "next/dynamic";
import { FiSearch, FiFile, FiFolder } from "react-icons/fi";
import { useContext } from "react";

const Head = dynamic(() => import("../../modules/seo/head"));
import { Sidebar } from "../../components/sidebar";
import Input from "../../components/input";
import { Heading } from "../../components/heading";
import { Cog } from "../../icon/cog";

import styles from "../../styles/pages/dashboard/home.module.scss";
import { Link } from "../../components/link";
import { Folder } from "../../components/folder";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";

const Dashboard: React.FC = () => {
  const { push } = useRouter();
  const { user, handleCreateFile } = useContext(AuthContext);

  return (
    <>
      <Head title="Files" defaultTitle="Dashboard Encryptr" />

      <main className={styles.container}>
        <Sidebar />

        <section>
          <header>
            <Input
              leftIcon={<FiSearch color="var(--color-gray-600)" size={24} />}
              placeholder="Search Anything"
            />
          </header>

          <div className={styles.breadcrumbs}>
            <Link href="/dashboard" className={styles.headingMuted}>
              <Heading variant="small">Dashboard</Heading>
            </Link>

            <span className={styles.cog}>
              <Cog />
            </span>

            <Link href="/dashboard/files" className={styles.headingActive}>
              <Heading variant="small">Files</Heading>
            </Link>
          </div>

          <div className={styles.folders}>
            <Heading variant="small" weight="bold">
              Folders
            </Heading>
            <ul>
              {user?.folders.map(({ id, label }) => (
                <li key={id}>
                  <button data-folder-parent="true" className={styles.folder}>
                    <FiFolder size={32} />
                    <Folder />

                    <Heading variant="small">{label}</Heading>
                  </button>
                </li>
              ))}
              <li>
                <Link href="/dashboard/folder/create" className={styles.create}>
                  <FiFolder size={32} />
                  <Heading variant="small">Create new +</Heading>
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.files}>
            <Heading variant="small" weight="bold">
              Files
            </Heading>
            <ul>
              {user?.files.map(({ id, label }) => {
                return (
                  <li key={id}>
                    <Link
                      href={`/dashboard/file/${id}`}
                      className={styles.file}
                    >
                      <FiFile size={32} />
                      <Heading variant="small">
                        {label.slice(0, 10) + "..." || "No title yet :/"}
                      </Heading>
                    </Link>
                  </li>
                );
              })}
              <li>
                <button
                  onClick={() => {
                    const file = handleCreateFile();

                    push(`/dashboard/file/${file.id}`);
                  }}
                  className={styles.create}
                >
                  <FiFolder size={32} />
                  <Heading variant="small">Create new +</Heading>
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
