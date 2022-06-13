/* eslint-disable @next/next/no-img-element */
import { useContext, useEffect } from "react";
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

  useEffect(() => {
    const loggedUserId = localStorage.getItem("@encryptr:logged-user-id");

    if (!loggedUserId) {
      router.push("/login");
    }
  }, [router]);

  return (
    <nav className={styles.sidebar}>
      {!isLessThanDesktop && (
        <>
          <Link href="/dashboard">
            <Brand colors={defaultColorScheme} variant="full" />
          </Link>

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
            href="/dashboard"
            icon={<Files />}
            dropdown={
              <>
                {user?.files.length === 0 && (
                  <Heading variant="small">
                    looks like you {"don't"} have files yet.
                  </Heading>
                )}
                {user?.files.map((file) => (
                  <Link
                    className={styles.filesDropdownItem}
                    href={`/dashboard/file/${file.id}`}
                    key={file.id}
                  >
                    <Heading variant="text">
                      {file.label.slice(0, 8) + "..."}
                    </Heading>
                    <button className={styles.cog}>
                      <Cog />
                    </button>
                  </Link>
                ))}
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
            disabled={true}
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
