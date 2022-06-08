/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import { Brand, defaultColorScheme } from "../brand";
import { Heading } from "../heading";
import { Item } from "./item";
import { Link } from "../link";

import { AuthContext } from "../../context/auth";

import { Database } from "../../icon/database";
import { Files } from "../../icon/files";
import { Profile } from "../../icon/profile";
import { Star } from "../../icon/star";

import styles from "./styles.module.scss";
import { Cog } from "../../icon/cog";

export const Sidebar: React.FC = () => {
  const router = useRouter();

  const { user } = useContext(AuthContext);
  const isLessThanDesktop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <nav className={styles.sidebar}>
      {!isLessThanDesktop && (
        <>
          <Brand colors={defaultColorScheme} variant="full" />

          <section className={styles.profile}>
            <div className={styles.image}>
              <img
                src={`https://avatars.dicebear.com/api/initials/${user?.username}.svg`}
                alt="legend"
              />
            </div>

            <div>
              <Heading variant="small">Hello 👋</Heading>
              <Heading variant="text" weight="bold">
                @{user && user.username}
              </Heading>
            </div>
          </section>
        </>
      )}

      <ul>
        <li>
          <Item
            active={router.asPath === "/dashboard/profile"}
            title="Profile"
            href="/dashboard/profile"
            icon={<Profile />}
          />
        </li>
        <li>
          <Item
            active={router.asPath === "/dashboard"}
            title="Files"
            href="/dashboard/files"
            icon={<Files />}
            dropdown={
              <>
                <Link className={styles.filesDropdownItem} href="/file/xyz">
                  <Heading variant="text">File 1</Heading>
                  <button className={styles.cog}>
                    <Cog />
                  </button>
                </Link>
                <Link className={styles.filesDropdownItem} href="/file/xyz">
                  <Heading variant="text">File 2</Heading>
                  <button className={styles.cog}>
                    <Cog />
                  </button>
                </Link>
              </>
            }
          />
        </li>
        {isLessThanDesktop && (
          <li>
            <Item
              active={router.asPath === "/"}
              title="Home"
              href="/"
              icon={<Brand colors={defaultColorScheme} variant="icon" />}
            />
          </li>
        )}
        <li>
          <Item
            active={router.asPath === "/dashboard/starred"}
            title="Starred"
            href="/dashboard/starred"
            icon={<Star />}
          />
        </li>
        <li>
          <Item
            active={router.asPath === "/dashboard/data"}
            title="My Data"
            href="/dashboard/data"
            icon={<Database />}
          />
        </li>
      </ul>
    </nav>
  );
};
