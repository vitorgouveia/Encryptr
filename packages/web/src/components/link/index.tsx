import NextLink from "next/link";

import styles from "./styles.module.scss";

type LinkProps = {
  href: string;
  label?: string;
  children: React.ReactNode;
  global?: boolean;
  className?: string;
  active?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  label,
  active,
  global = false,
  className = "",
}) => {
  return global ? (
    <a
      href={href}
      target="_blank"
      className={`${styles.link} ${className}`}
      rel="noreferrer"
    >
      {label || children}
    </a>
  ) : (
    <NextLink href={href}>
      <a data-active={active} className={`${styles.link} ${className}`}>
        {label || children}
      </a>
    </NextLink>
  );
};
