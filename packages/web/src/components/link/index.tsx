import NextLink from "next/link";

import styles from "./styles.module.scss";

type LinkProps = {
  href: string;
  label?: string;
  children: React.ReactNode;
  global?: boolean;
  className?: string;
  active?: boolean;
  disabled?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  label,
  active,
  global = false,
  className = "",
  disabled = false,
}) => {
  return global ? (
    <a
      data-active={active}
      href={href}
      target="_blank"
      className={`${styles.link} ${className}`}
      rel="noreferrer"
    >
      {label || children}
    </a>
  ) : (
    <NextLink href={disabled ? "" : href}>
      <a
        data-active={active}
        data-disabled={disabled}
        // tabIndex={disabled ? -1 : 0}
        className={`${styles.link} ${className}`}
      >
        {label || children}
      </a>
    </NextLink>
  );
};
