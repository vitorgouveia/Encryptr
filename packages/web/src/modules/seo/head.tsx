import NextHead from "next/head";

type HeadProps = {
  title: string;
  defaultTitle?: string;
};

const Head: React.FC<HeadProps> = ({ title, defaultTitle = "Encryptr" }) => {
  return (
    <NextHead>
      <title>
        {title} - {defaultTitle}
      </title>
    </NextHead>
  );
};

export default Head;
