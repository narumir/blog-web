'use client';

import {
  Menu,
} from "@headlessui/react";
import {
  BuggerIcon,
} from "src/icons";
import {
  Navigator,
} from "./navigator";

export function MobileMenu() {
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-8 h-5 ml-8 md:hidden">
        <BuggerIcon />
      </Menu.Button>
      <Menu.Items className="absolute w-screen z-50 ">
        <Menu.Item as="div">
          {({ active }) => (
            <Navigator absolute={active} />
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
