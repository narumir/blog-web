'use client';

import Link from "next/link";
import {
  useState,
} from "react";
import {
  Menu,
} from "@headlessui/react";
import {
  BuggerIcon,
  DocumentIcon,
  DuplicateDocumentIcon,
  PencilSquare,
} from "src/icons";
import {
  Nav,
} from "./nvaigator";
import {
  SignDialog,
} from "./sign";

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
        <div className="h-full mr-8 md:mr-16 flex justify-end items-center">
          <Menu as="div" className="relative">
            <Menu.Button className="mr-8">
              <PencilSquare className="text-gray-500" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-40 bg-blue-500 text-white p-4 rounded-lg z-50">
              <Menu.Item >
                <Link href={"/"} className="mb-6 block">
                  <DocumentIcon className="w-5 h-5 inline-block mr-4" />
                  New post
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link href={"/"} className="block">
                  <DuplicateDocumentIcon className="w-5 h-5 inline-block mr-4" />
                  New series
                </Link>
              </Menu.Item>
            </Menu.Items>
          </Menu>
          <SignDialog />
        </div>
      </header>
      {isShowMenu && <Nav onClick={onBuggerClick} absolute={isShowMenu} />}
    </>
  );
}
