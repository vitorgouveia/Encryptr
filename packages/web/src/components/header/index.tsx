import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";

import { Brand, defaultColorScheme } from "../brand";
import { Button } from "../button";
import { Link } from "../link";

import styles from "./styles.module.scss";

type Link = {
  label: string;
  href: string;
  global?: boolean;
};

const links: Link[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Docs",
    href: "/Encryptr/docs",
    global: true,
  },
];

const Links = () => {
  const router = useRouter();

  return (
    <ul>
      {links.map(({ label, href, global }) => (
        <li key={href}>
          <Link
            global={global}
            active={router.asPath.includes(href)}
            href={href}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const CTAs = () => (
  <section className={styles.ctas}>
    <Link href="/login">
      <Button variant="primary">Login</Button>
    </Link>
    <Link href="/register">
      <Button variant="outlined">Register</Button>
    </Link>
  </section>
);

export const Header: React.FC = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const isTablet = useMediaQuery({
    query: "(max-width: 1024px) and (min-width: 428px)",
  });

  const handleOpenMobileMenu = useCallback(() => {
    setIsMobileMenuOpened((opened) => !opened);
  }, []);

  return (
    <header className={styles.header}>
      <nav>
        <section className={styles.logo}>
          <Link href="/">
            <Brand
              variant={isTablet ? "icon" : "full"}
              colors={defaultColorScheme}
            />
          </Link>
        </section>

        <Links />

        <CTAs />

        <button onClick={handleOpenMobileMenu} className={styles.menuToggle}>
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 26H45.5"
              stroke="#DFE2E7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 13H45.5"
              stroke="#DFE2E7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 39H45.5"
              stroke="#DFE2E7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isMobileMenuOpened && (
          <div
            style={{
              top: "116px",
            }}
            className={styles.mobileMenu}
          >
            <Links />
            <CTAs />
          </div>
        )}
      </nav>
    </header>
  );
};
