'use client';

import {
  Fragment,
  useState,
} from "react";
import {
  cn,
} from "src/utils";
import {
  ActiveLink,
} from "./active-link";
import {
  CubeTransparentIcon,
  DocumentIcon,
  DuplicateDocumentIcon,
  NewsPaperIcon,
  SettingsIcon,
} from "src/icons";
import { Settings } from "./settings";

const menus = [
  {
    name: "Posts",
    Icon: DocumentIcon,
    href: "/",
  },
  {
    name: "Series",
    Icon: DuplicateDocumentIcon,
    href: "/series",
  },
  {
    name: "Assets",
    Icon: CubeTransparentIcon,
    href: "/assets",
  },
  {
    name: "News",
    Icon: NewsPaperIcon,
    href: "/news",
  },
];

type Props = {
  absolute?: boolean,
  expend?: boolean,
  onClick?: () => void,
  onSettingsClick: () => void,
}
export function Nav({ absolute = false, expend = true, onClick, onSettingsClick }: Props) {
  const styles = cn("w-full z-40 bg-[#F2F2F2]", ...(absolute ? ["absolute"] : []));
  const handleSettingsOpen = () => {
    if (onClick != null) {
      onClick();
    }
    onSettingsClick();
  }
  return (
    <Fragment>
      <nav className={styles}>
        {expend && <p className="mx-10 my-4 text-xs font-medium text-gray-500">New Feeds</p>}
        <ul className="m-5">
          {menus.map(({ href, name, Icon }, i) => (
            <li key={i}>
              <ActiveLink
                onClick={onClick}
                href={href}
                activeClassName="block rounded-xl p-4 bg-violet-500 text-white "
                className="block rounded-xl p-4 text-gray-500">
                <Icon
                  className="inline-block mr-4"
                />
                {expend && name}
              </ActiveLink>
            </li>
          ))}
        </ul>
        <hr
          className="mx-4 border-1 border-gray-300"
        />
        <ul
          className="mx-9 my-4"
        >
          <li className="text-gray-500">

            <button
              onClick={handleSettingsOpen}
            >
              <SettingsIcon
                className="inline-block mr-4"
              />
              {expend && "Settings"}
            </button>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}
