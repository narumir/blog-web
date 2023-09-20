'use client';

import Image from "next/image";
import {
  Dialog,
  Tab,
} from "@headlessui/react";
import {
  Fragment,
  useState,
} from "react";
import {
  KeyIcon,
  XMarkIcon,
} from "src/icons";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";

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

type SignInProps = {
  onCloseClick: () => void,
  switchSign: () => void,
}
function SignIn({ onCloseClick, switchSign }: SignInProps) {
  const [stepIndex, setStepIndex] = useState<number>(0);
  const [email, setEmail] = useState<string>();
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>();
  const toPasswordStep = () => {
    if (email == null || email.length < 4) {
      setEmailErrorMessage("Enter an email");
      return;
    }
    if (!/^[a-zA-Z0-9._%+=]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailErrorMessage("Enter regular email");
      return;
    }
    setEmailErrorMessage(undefined);
    setStepIndex(1);
  }
  const signinViaPassword = () => {
    if (password == null) {
      setPasswordErrorMessage("Enter a password");
      return;
    }
    if (password.length < 8) {
      setPasswordErrorMessage("Enter a password of at least 8 characters");
      return;
    }
    setPasswordErrorMessage(undefined);

  };
  return (
    <Dialog.Panel
      className="w-full max-w-md h-screen sm:h-fit sm:rounded-3xl p-6 sm:p-12 bg-white relative"
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
      <Tab.Group as={Fragment} selectedIndex={stepIndex} onChange={setStepIndex} defaultIndex={0}>
        <Tab.List as="div" className="hidden">
          <Tab>email</Tab>
          <Tab>password</Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {emailErrorMessage && <p className="text-red-500 text-xs">{emailErrorMessage}</p>}
            <button
              className="w-full rounded-2xl py-4 bg-violet-600 text-white font-bold mt-4"
              onClick={toPasswordStep}
            >
              Continue
            </button>
            <div className="bg-blue-500 rounded-2xl text-white font-bold px-6 py-4 mt-4 flex justify-between flex-1">
              <KeyIcon className="" />
              <span className="text-center block w-full">Signin via security key</span>
            </div>
          </Tab.Panel>
          <Tab.Panel>
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            {passwordErrorMessage && <p className="text-red-500 text-xs">{passwordErrorMessage}</p>}
            <button
              onClick={signinViaPassword}
              className="w-full rounded-2xl py-4 bg-violet-600 text-white font-bold mt-6"
            >
              Sign in
            </button>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </Dialog.Panel>
  );
}

type SignUpProps = {
  onCloseClick: () => void,
  switchSign: () => void,
}
type SignUpForm = {
  email: string,
  nickname: string,
  password: string,
  passwordCheck: string,
}
function SignUp({ onCloseClick, switchSign }: SignUpProps) {
  const { register, watch, handleSubmit, formState: { errors } } = useForm<SignUpForm>();
  const onSignUpSumbit: SubmitHandler<SignUpForm> = (data) => {
    console.log(data);
  };
  return (
    <Dialog.Panel
      className="w-full max-w-md h-screen  sm:h-fit sm:rounded-3xl p-6 sm:p-12 bg-white relative"
    >
      <Dialog.Title
        className="text-4xl font-semibold mt-8 sm:mt-0"
      >
        Sign Up
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
        Already a user?
      </p>
      <button
        className="text-blue-500 ml-2"
        onClick={switchSign}
      >
        Signin now
      </button>
      <form
        onSubmit={handleSubmit(onSignUpSumbit)}
      >
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
          {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
        />
        {errors.email?.type === "required" && <p className="text-red-500 text-xs">Enter an email</p>}
        {errors.email?.type === "pattern" && <p className="text-red-500 text-xs">Enter regular email</p>}
        <label
          htmlFor="nickname"
          className="block mb-2 text-gray-500 mt-6"
        >
          Nickname
        </label>
        <input
          id="nickname"
          type="text"
          className="w-full bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="Nickname"
          {...register("nickname", { required: true, minLength: 2 })}
        />
        {errors.nickname?.type === "required" && <p className="text-red-500 text-xs">Enter a nickname</p>}
        {errors.nickname?.type === "minLength" && <p className="text-red-500 text-xs">Enter at least 2 characters</p>}
        <label
          htmlFor="password"
          className="block mb-2 text-gray-500 mt-6">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="w-full bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="Password"
          {...register("password", { required: true, minLength: 8, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/ })}
        />
        {errors.password?.type === "required" && <p className="text-red-500 text-xs">Enter a password</p>}
        {errors.password?.type === "pattern" && <p className="text-red-500 text-xs">Password must contain upper and lower case letters, numbers and special characters</p>}
        {errors.password?.type === "minLength" && <p className="text-red-500 text-xs">Enter a password of at least 8 characters</p>}
        <label
          htmlFor="password-check"
          className="block mb-2 text-gray-500 mt-6">
          Password check
        </label>
        <input
          id="password-check"
          type="password"
          className="w-full bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="Password check"
          {...register("passwordCheck", { required: true, minLength: 8, validate: (val) => val === watch("password") })}
        />
        {errors.passwordCheck?.type === "validate" && <p className="text-red-500 text-xs">Check password</p>}
        <input
          type="submit"
          value="Continue"
          className="w-full rounded-2xl py-4 bg-violet-600 text-white font-bold mt-6"
        />
      </form>
    </Dialog.Panel>
  );
}
