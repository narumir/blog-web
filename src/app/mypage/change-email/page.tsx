'use client';

import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  MYPageSubLayout,
} from "../mypage-sublayout";

type EmailForm = {
  email: string,
}
export default function ChangeEmailPage() {
  const { register, handleSubmit, formState: { errors } } = useForm<EmailForm>();
  const onSubmit: SubmitHandler<EmailForm> = (data) => {
    console.log(data);
  };
  return (
    <MYPageSubLayout title="Change password">
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
          className="w-72 bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
        />
        {errors.email?.type === "required" && <p className="text-red-500 text-xs">Enter an email</p>}
        {errors.email?.type === "pattern" && <p className="text-red-500 text-xs">Enter regular email</p>}
        <input
          type="submit"
          value="update"
          className="w-72 rounded-2xl bg-violet-600 text-white py-4 mt-6"
        />
      </form>
    </MYPageSubLayout>
  );
}
