import { memo } from "react";

import { Heading } from "../heading";
import styles from "./styles.module.scss";

export type IColor = {
  left: string;
  right: string;
};

export const defaultColorScheme = {
  left: "#55ACEE",
  right: "#226699",
};

export const ukraineColorScheme = {
  left: "#005BBB",
  right: "#FFD500",
};

export type BrandProps = {
  colors: IColor;
  variant?: "full" | "icon";
};

export const Brand: React.FC<BrandProps> = memo(
  ({ colors, variant = "full" }) => {
    return (
      <div className={styles.brandContainer}>
        <svg
          width="33"
          height="38"
          viewBox="0 0 33 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.7298 3.67707C36.0145 25.4053 23.5368 34.2791 16.6374 36C-0.449645 31.1516 -0.170734 12.4312 2.1046 3.67707C12.6739 -1.17137 25.5919 1.65689 30.7298 3.67707Z"
            fill="url(#paint0_linear_8_105)"
            stroke="#DFE2E7"
            strokeWidth="2"
          />

          <defs>
            <linearGradient
              id="paint0_linear_8_105"
              x1="-0.658932"
              y1="18.5083"
              x2="33"
              y2="18.5083"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.507339" stopColor={colors.left} />
              <stop offset="0.50744" stopColor={colors.right} />
            </linearGradient>
          </defs>
        </svg>
        {variant === "full" && (
          <Heading variant="h3" weight="bold">
            Encryptr
          </Heading>
        )}
      </div>
    );
  }
);
