import NextLink from "next/link";

import styles from "./styles.module.scss";

type LinkProps = {
  href: string;
  label?: string;
  children: React.ReactNode;
  global?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  label,
  global = false,
}) => {
  return global ? (
    <NextLink href={href}>
      <a className={styles.link}>{label || children}</a>
    </NextLink>
  ) : (
    <a href={href} className={styles.link}>
      {label || children}
    </a>
  );
};
