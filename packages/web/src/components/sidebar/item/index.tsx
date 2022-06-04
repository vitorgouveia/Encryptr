import { useState } from "react";
import { Cog } from "../../../icon/cog";
import { Heading } from "../../heading";
import { Link } from "../../link";

type ItemProps = {
  href: string;
  title: string;
  icon: React.ReactNode;

  dropdown?: boolean;
};

export const Item: React.FC<ItemProps> = ({
  icon,
  href,
  title,
  dropdown = false,
}) => {
  const [open, setOpen] = useState(false);

  return dropdown ? (
    <div>
      <Link href={href}>
        {icon}
        <Heading variant="text">{title}</Heading>
      </Link>

      <button onClick={() => setOpen((open) => !open)}>
        <Cog />
      </button>

      {open && (
        <div>
          <h1>dadw</h1>
        </div>
      )}
    </div>
  ) : (
    <Link href={href}>
      {icon}

      <Heading variant="text">{title}</Heading>
    </Link>
  );
};
