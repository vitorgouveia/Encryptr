import NextLink from "next/link";

import styles from "./styles.module.scss";

type LinkProps = {
  href: string;
  label?: string;
  children: React.ReactNode;
  global?: boolean;
  className?: string;
};

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  label,
  global = false,
  className = "",
}) => {
  return global ? (
    <a href={href} className={`${styles.link} ${className}`}>
      {label || children}
    </a>
  ) : (
    <NextLink href={href}>
      <a className={`${styles.link} ${className}`}>{label || children}</a>
    </NextLink>
  );
};
