'use client';

import Link from "next/link";
import Image from "next/image";
import {
  BuggerIcon,
} from "src/icons";
import {
  Menu,
} from "src/components";
import {
  useState,
} from "react";
import {
  cn,
} from "src/utils";

export function Sidebar() {
  const [isSideExpend, setSideExpend] = useState<boolean>(true);
  const onBuggerClick = () => {
    setSideExpend((prev) => !prev);
  };
  const style = isSideExpend ? "w-64" : "w-24";
  return (
    <aside className={cn("hidden md:block h-full border-r-2", style)}>
      <div className="m-10 flex justify-start items-center">
        <button className="w-8 h-5 inline-block" aria-label="menu expend" onClick={onBuggerClick}>
          <BuggerIcon />
        </button>
        <Link href={"/"} className="inline-block ml-6">
          <Image width={100} height={32} src={"/logo.webp"} alt="logo" />
        </Link>
      </div>
      <Menu expend={isSideExpend} />
    </aside>
  );
}
