'use client';

import Link from "next/link";
import Image from "next/image";
import {
  useState,
} from "react";
import {
  BuggerIcon,
} from "src/icons";
import {
  Menu,
} from "./menu";

export function Header() {
  const [isShowMenu, setShowMenu] = useState<boolean>(false);
  const onBuggerClick = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <>
      <header className="h-24 md:h-28 flex justify-between items-center md:justify-end border-b-2">
        <button className="w-8 h-5 ml-8 md:hidden" aria-label="menu expend" onClick={onBuggerClick} >
          <BuggerIcon />
        </button>
        <nav className="h-full mr-8 md:mr-16 flex justify-end items-center">
          <Link className="w-10 h-10 md:w-12 md:h-12 rounded-full" href={"/"}>
            <Image priority width={48} height={48} src="/user.webp" alt={""} />
          </Link>
        </nav>
      </header>
      {isShowMenu && <Menu onClick={() => setShowMenu(false)} absolute={isShowMenu} />}
    </>
  );
}
