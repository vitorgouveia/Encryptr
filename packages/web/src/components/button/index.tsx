import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "outlined";

  label?: string;
  children?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  children,
  variant,
  ...props
}) => {
  return (
    <button data-variant={variant} className={styles.button} {...props}>
      <strong>{label || children}</strong>
    </button>
  );
};
