/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from "react-responsive";

import { Brand, defaultColorScheme } from "../brand";
import { Heading } from "../heading";
import { Item } from "./item";
import { Link } from "../link";

import { Database } from "../../icon/database";
import { Files } from "../../icon/files";
import { Profile } from "../../icon/profile";
import { Star } from "../../icon/star";

export const Sidebar: React.FC = () => {
  const isLessThanDesktop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <nav>
      {!isLessThanDesktop && (
        <>
          <Brand colors={defaultColorScheme} variant="full" />

          <section>
            <div className="image">
              <img
                src={`https://avatars.dicebear.com/api/identicon/${10}.svg`}
                alt="legend"
              />

              <div>
                <Heading variant="small">Hello 👋</Heading>
                <Heading variant="text" weight="bold">
                  @{"vitor"}
                </Heading>
              </div>
            </div>
          </section>
        </>
      )}

      <ul>
        <li>
          <Item title="Profile" href="/dashboard/profile" icon={<Profile />} />
        </li>
        <li>
          <Item
            title="Files"
            href="/dashboard/files"
            icon={<Files />}
            dropdown={true}
          />
        </li>
        {isLessThanDesktop && (
          <li>
            <Link href="/">
              <Brand colors={defaultColorScheme} variant="icon" />
            </Link>
          </li>
        )}
        <li>
          <Item title="Starred" href="/dashboard/starred" icon={<Star />} />
        </li>
        <li>
          <Item title="My Data" href="/dashboard/data" icon={<Database />} />
        </li>
      </ul>
    </nav>
  );
};
