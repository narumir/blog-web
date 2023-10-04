'use client';

import Image from "next/image";
import {
  Dialog,
} from "@headlessui/react";
import {
  Fragment,
  useState,
} from "react";
import dynamic from "next/dynamic";

const SignUp = dynamic(() => import("./signup"), { ssr: false });
const SignIn = dynamic(() => import("./signin"), { ssr: false });

export function SignDialog() {
  const [isDialogShow, setDialogShow] = useState<boolean>(false);
  const [sign, setSign] = useState<boolean>(true);
  const openDialog = () => {
    setDialogShow(true);
  };
  const closeDialog = () => {
    setDialogShow(false);
  };
  const switchSign = () => {
    setSign((prev) => !prev);
  }
  return (
    <Fragment>
      <button
        onClick={openDialog}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full"
      >
        <Image
          priority
          width={48}
          height={48}
          src="/user.webp"
          alt={"signin"}
          className="rounded-full"
        />
      </button>
      <Dialog
        open={isDialogShow}
        onClose={closeDialog}
      >
        <div
          className="fixed inset-0 bg-black/30"
          aria-hidden="true"
        />
        <div
          className="fixed inset-0 flex w-screen items-center justify-center sm:p-4"
        >
          {sign
            ? <SignIn
              switchSign={switchSign}
              onCloseClick={closeDialog}
            />
            : <SignUp
              switchSign={switchSign}
              onCloseClick={closeDialog}
            />
          }
        </div>
      </Dialog>
    </Fragment>
  );
}
