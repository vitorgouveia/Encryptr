import { useCallback, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";

import { Brand, defaultColorScheme } from "../brand";
import { Button } from "../button";
import { Link } from "../link";

import styles from "./styles.module.scss";

const Links = () => (
  <ul>
    <li>
      <Link href="/services">Services</Link>
    </li>
    <li>
      <Link href="/docs">Docs</Link>
    </li>
  </ul>
);

const CTAs = () => (
  <section className={styles.ctas}>
    <Button variant="primary">Login</Button>
    <Button variant="outlined">Register</Button>
  </section>
);

export const Header: React.FC = () => {
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const navElement = useRef<HTMLDivElement>(null);

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px) and (min-width: 428px)",
  });

  const handleOpenMobileMenu = useCallback(() => {
    setIsMobileMenuOpened((opened) => !opened);
  }, []);

  return (
    <header className={styles.header}>
      <nav ref={navElement}>
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
            style={{ top: navElement.current?.clientHeight }}
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
