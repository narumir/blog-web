'use client';

import Image from "next/image";
import {
  Fragment,
  useRef,
} from "react";
import {
  useForm,
  SubmitHandler,
  Controller,
} from "react-hook-form";
import {
  TextareaForm,
} from "./textarea-form";

type ProfileProps = {
  email: string,
  nickname: string,
  bio: string,
}
export function UpdateProfile() {
  const profileImageRef = useRef<HTMLInputElement>(null);
  const onProfileChangeButtonClick = () => {
    if (profileImageRef.current == null) {
      return;
    }
    profileImageRef.current.click();
  };
  const { control, register, handleSubmit, formState: { errors } } = useForm<ProfileProps>();
  const onSubmit: SubmitHandler<ProfileProps> = (data) => {
    console.log(data);
  };
  return (
    <Fragment>
      <p
        className="block mb-2 text-gray-500 mt-6"
      >
        Your Avator
      </p>
      <div className="h-14 flex justify-between">
        <input
          type="file"
          accept=".png, .webp, .jpeg, .jpg"
          className="hidden"
          ref={profileImageRef}
        />
        <Image
          width={80}
          height={80}
          className="w-14 h-14"
          src={"/profile.webp"}
          alt=""
        />
        <button
          className="ml-4 py-4 flex-1 rounded-2xl bg-blue-500 text-white"
          onClick={onProfileChangeButtonClick}
        >
          Update profile
        </button>
      </div>
      <form
        className="mt-6"
        onSubmit={handleSubmit(onSubmit)}
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
          htmlFor="bio"
          className="block mb-2 text-gray-500 mt-6"
        >
          Bio
        </label>
        <Controller
          name="bio"
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextareaForm
              placeholder="Bio"
              className="resize-none overflow-y-auto w-full h-32 bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
              onChange={onChange}
              value={value} />
          )}
        />
        {errors.bio?.type === "maxLength" && <p className="text-red-500 text-xs">Enter at less then 255 characters</p>}
        <input
          type="submit"
          value="Update"
          className="w-full rounded-2xl bg-violet-600 text-white py-4 mt-6"
        />
      </form>
    </Fragment>
  );
}
