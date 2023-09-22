import {
  Dialog,
  Tab
} from "@headlessui/react";
import {
  Fragment,
} from "react";
import {
  XMarkIcon,
} from "src/icons";
import {
  cn,
} from "src/utils";
import {
  UpdateProfile,
} from "./update-profile";
import {
  UpdatePassword,
} from "./update-password";

type Props = {
  isOpen: boolean,
  close: () => void,
}
export function Settings({ isOpen, close }: Props) {
  return (
    <Dialog
      open={isOpen}
      onClose={close}
    >
      <div
        className="fixed inset-0 bg-black/30"
        aria-hidden="true"
      />
      <div
        className="fixed inset-0 flex w-screen items-center justify-center sm:p-4"
      >
        <Dialog.Panel
          className="w-full max-w-md overflow-y-auto h-screen sm:h-fit max-h-screen sm:rounded-3xl p-6 sm:p-12 bg-white relative"
        >
          <Dialog.Title
            className="text-4xl font-semibold mt-8 sm:mt-0 mb-6"
          >
            Settings
          </Dialog.Title>
          <button
            className="absolute top-6 right-6"
            onClick={close}
          >
            <XMarkIcon
              className="text-black"
            />
          </button>
          <Tab.Group>
            <Tab.List
              className="w-full"
            >
              <Tab
                as={Fragment}
              >
                {({ selected }) => (
                  <button
                    className={cn("py-1 px-3 rounded-xl text-sm border-[1px] border-violet-500 mt-2", selected ? "bg-violet-500 text-white" : "")}
                  >
                    Profile
                  </button>
                )}
              </Tab>
              <Tab
                as={Fragment}
              >
                {({ selected }) => (
                  <button
                    className={cn("py-1 px-3 rounded-xl text-sm border-[1px] border-violet-500 mt-2 ml-2", selected ? "bg-violet-500 text-white" : "")}
                  >
                    Password
                  </button>
                )}
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <UpdateProfile />
              </Tab.Panel>
              <Tab.Panel>
                <UpdatePassword />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
