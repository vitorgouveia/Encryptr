import NextLink from "next/link";
import { AnchorHTMLAttributes } from "react";

import styles from "./styles.module.scss";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
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
  ...props
}) => {
  return global ? (
    <a
      {...props}
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
        {...props}
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
