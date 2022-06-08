import NextHead from "next/head";

type HeadProps = {
  title: string;
};

const Head: React.FC<HeadProps> = ({ title }) => {
  return (
    <NextHead>
      <title>{title} - Encryptr</title>
    </NextHead>
  );
};

export default Head;
