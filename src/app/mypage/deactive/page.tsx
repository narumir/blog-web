'use client';

import {
  Dialog,
} from "@headlessui/react";
import {
  Fragment,
  useState,
} from "react";
import {
  XMarkIcon,
} from "src/icons";
import {
  MYPageSubLayout,
} from "../mypage-sublayout";

export default function DeactivePage() {
  const [pwModalOpen, setPWModalOpen] = useState<boolean>(false);
  return (
    <Fragment>
      <MYPageSubLayout
        title="Deactive account"
      >
        <p
          className="my-4"
        >
          I'm sorry to see you go.<br />Please note that all your content will be permanently delete upon account deletion.
        </p>
        <button
          className="bg-red-500 rounded-2xl text-white py-2 w-full"
          onClick={() => setPWModalOpen(true)}
        >
          deactive
        </button>
      </MYPageSubLayout>
      <Dialog
        open={pwModalOpen}
        onClose={setPWModalOpen}
      >
        <div
          className="fixed inset-0 bg-black bg-opacity-25"
          aria-hidden="true"
        />
        <div
          className="fixed inset-0 flex w-screen items-center justify-center sm:p-4"
        >
          <Dialog.Panel
            className="w-full max-w-md overflow-y-auto h-screen sm:h-fit max-h-screen sm:rounded-3xl p-6 sm:p-12 bg-white relative"
          >
            <Dialog.Title
              className="text-2xl font-semibold mt-8 sm:mt-0 mb-6"
            >
              Enter password
            </Dialog.Title>
            <button
              className="absolute top-6 right-6"
              onClick={() => setPWModalOpen(false)}
            >
              <XMarkIcon
                className="text-black"
              />
            </button>
            <label
              htmlFor="passowrd"
              className="block mb-2 text-gray-500 mt-6"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
              placeholder="password"
            />
            <button
              className="w-full bg-red-500 text-white rounded-xl py-2 px-3 mt-4"
            >
              deactive
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Fragment>
  );
}
