'use client';

import Link from "next/link";
import {
  Menu,
} from "@headlessui/react";
import {
  DocumentIcon,
  DuplicateDocumentIcon,
  PencilSquare,
} from "src/icons";

export function PostMenu() {
  return (
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
  );
}
