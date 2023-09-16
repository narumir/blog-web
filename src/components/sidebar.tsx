'use client';

import Link from "next/link";
import Image from "next/image";
import {
  BuggerIcon,
} from "src/icons";
import {
  Nav,
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
    <aside className={cn("hidden md:block min-h-screen border-r-2", style)}>
      <div className="my-10 mx-8 flex justify-start items-center">
        <button className="w-8 h-8 inline-block" aria-label="menu expend" onClick={onBuggerClick}>
          <BuggerIcon />
        </button>
        <Link href={"/"} className="inline-block ml-6 h-8">
          <Image priority width={100} height={30} src={"/logo.webp"} alt="logo" />
        </Link>
      </div>
      <Nav expend={isSideExpend} />
    </aside>
  );
}
