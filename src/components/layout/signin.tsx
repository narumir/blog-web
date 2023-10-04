'use client';

import { Dialog } from "@headlessui/react";
import { Fragment, useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { getPublicKey, signin } from "src/actions";
import { encryptData } from "src/client";
import { KeyIcon, XMarkIcon } from "src/icons";

type SignInProps = {
  onCloseClick: () => void,
  switchSign: () => void,
}

type SignInForm = {
  email: string,
  password?: string,
}
export default function SignIn({ onCloseClick, switchSign }: SignInProps) {
  const [viaPasskey, setViaPasskey] = useState<boolean>(true);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<SignInForm>();

  const onHandleSignIn: SubmitHandler<SignInForm> = async (data) => {
    console.log(data);
    if (data.password != null) {
      const publicKey = await getPublicKey();
      console.log(publicKey)
      data.password = encryptData(publicKey, data.password);
      const err = await signin(data.email, data.password);
      if (err) {
        alert(err);
      }
    }
  }

  return (
    <Dialog.Panel
      className="w-full max-w-md overflow-y-auto h-screen max-h-screen sm:h-fit sm:rounded-3xl p-6 sm:p-12 bg-white relative"
    >
      <Dialog.Title
        className="text-4xl font-semibold mt-8 sm:mt-0"
      >
        Sign in
      </Dialog.Title>
      <button
        className="absolute top-6 right-6"
        onClick={onCloseClick}
      >
        <XMarkIcon
          className="text-black"
        />
      </button>
      <p
        className="mb-8 mt-4 text-gray-500 inline-block"
      >
        New user?
      </p>
      <button
        className="text-blue-500 ml-2"
        onClick={switchSign}
      >
        Create an account
      </button>
      <form onSubmit={handleSubmit(onHandleSignIn)}>
        <label
          htmlFor="email"
          className="block mb-2 text-gray-500"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="Email"
          {...register("email", { required: true })}
        />
        {errors.email?.type === "required" && <p className="text-red-500 text-xs">Enter an email</p>}
        {viaPasskey && <button
          className="w-full rounded-2xl py-4 bg-violet-600 text-white font-bold mt-4"
          onClick={() => setViaPasskey(false)}
        >
          Continue
        </button>}
        {viaPasskey ?
          <button
            type="submit"
            className="w-full bg-blue-500 rounded-2xl text-white font-bold px-6 py-4 mt-4 flex justify-between flex-1"
            disabled={isSubmitting}>
            <KeyIcon />
            <span className="text-center block w-full">Signin via passkeys</span>
          </button> :
          <Fragment>
            <label
              htmlFor="password"
              className="block mb-2 text-gray-500"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password?.type === "required" && <p className="text-red-500 text-xs">Enter a password</p>}
            <input
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl py-4 bg-violet-600 text-white font-bold mt-6"
              value={"Sign in"}
            />
          </Fragment>
        }
      </form>
    </Dialog.Panel >
  );
}
