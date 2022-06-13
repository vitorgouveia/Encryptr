import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "outlined";

  label?: string;
  children?: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      data-variant={variant}
      className={`${styles.button} ${className}`}
      {...props}
    >
      <strong>{label || children}</strong>
    </button>
  );
};
