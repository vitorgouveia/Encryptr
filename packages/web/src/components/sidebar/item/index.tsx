import { useState } from "react";

import { Cog } from "../../../icon/cog";
import { Heading } from "../../heading";
import { Link } from "../../link";

import styles from "./styles.module.scss";

type ItemProps = {
  href: string;
  title: string;
  icon: React.ReactNode;

  dropdown?: React.ReactElement;
};

export const Item: React.FC<ItemProps> = ({ icon, href, title, dropdown }) => {
  const [open, setOpen] = useState(false);

  return dropdown ? (
    <div className={styles.dropdownContainer}>
      <div className={styles.item} data-dropdown={!!dropdown}>
        <Link href={href}>
          {icon}
          <Heading variant="text">{title}</Heading>
        </Link>
        <button
          data-enabled={open}
          className={styles.cog}
          onClick={() => setOpen((open) => !open)}
        >
          <Cog />
        </button>
      </div>

      {open && <div className={styles.dropdown}>{dropdown}</div>}
    </div>
  ) : (
    <Link href={href} className={styles.item}>
      {icon}

      <Heading variant="text">{title}</Heading>
    </Link>
  );
};
