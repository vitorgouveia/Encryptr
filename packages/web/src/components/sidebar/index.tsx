/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from "react-responsive";

import { Brand, defaultColorScheme } from "../brand";
import { Heading } from "../heading";
import { Item } from "./item";
import { Link } from "../link";

import { Database } from "../../icon/database";
import { Files } from "../../icon/files";
import { Profile } from "../../icon/profile";
import { Star } from "../../icon/star";

import styles from "./styles.module.scss";
import { Cog } from "../../icon/cog";

export const Sidebar: React.FC = () => {
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
                src={`https://avatars.dicebear.com/api/identicon/${10}.svg`}
                alt="legend"
              />
            </div>

            <div>
              <Heading variant="small">Hello 👋</Heading>
              <Heading variant="text" weight="bold">
                @{"vitor"}
              </Heading>
            </div>
          </section>
        </>
      )}

      <ul>
        <li>
          <Item title="Profile" href="/dashboard/profile" icon={<Profile />} />
        </li>
        <li>
          <Item
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
              title="Home"
              href="/"
              icon={<Brand colors={defaultColorScheme} variant="icon" />}
            />
          </li>
        )}
        <li>
          <Item title="Starred" href="/dashboard/starred" icon={<Star />} />
        </li>
        <li>
          <Item title="My Data" href="/dashboard/data" icon={<Database />} />
        </li>
      </ul>
    </nav>
  );
};
