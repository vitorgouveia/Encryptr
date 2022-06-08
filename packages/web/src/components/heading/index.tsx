import { HTMLAttributes } from "react";

const tags = {
  title: "h1",
  subtitle: "h4",
  text: "p",
  small: "small",
  h3: "h3",
  h6: "h6",
  h5: "h5",
};

type HeadingProps = HTMLAttributes<HTMLElement> & {
  variant: keyof typeof tags;
  label?: string;
  children: React.ReactNode;
  weight?: "normal" | "bold";
};

export const Heading: React.FC<HeadingProps> = ({
  variant,
  label,
  children,
  weight = "normal",
  ...props
}) => {
  const CustomTAG = tags[variant];

  return (
    // @ts-ignore
    <CustomTAG className={`weight-${weight}`} {...props}>
      {label || children}
    </CustomTAG>
  );
};
