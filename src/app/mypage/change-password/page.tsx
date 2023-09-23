'use client';
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  MYPageSubLayout,
} from "../mypage-sublayout";

type PasswordForm = {
  currentPassword: string,
  newPassword: string,
  newPasswordCheck: string,
}
export default function ChangePasswordPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<PasswordForm>();
  const onSubmit: SubmitHandler<PasswordForm> = (data) => {
    console.log(data);
  };
  return (
    <MYPageSubLayout title="Change password">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6"
      >
        <label
          htmlFor="current-password"
          className="block mb-2 text-gray-500"
        >
          Current password
        </label>
        <input
          id="current-password"
          type="password"
          className="w-72 bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="Current password"
          {...register("currentPassword", { required: true })}
        />
        {errors.currentPassword?.type === "required" && <p className="text-red-500 text-xs">Enter a password</p>}
        <label
          htmlFor="new-password"
          className="block mb-2 text-gray-500 mt-6"
        >
          New password
        </label>
        <input
          id="new-password"
          type="password"
          className="w-72 bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="New password"
          {...register("newPassword", { required: true, minLength: 8, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/ })}
        />
        {errors.newPassword?.type === "required" && <p className="text-red-500 text-xs">Enter a password</p>}
        {errors.newPassword?.type === "pattern" && <p className="text-red-500 text-xs">Password must contain upper and lower case letters, numbers and special characters</p>}
        {errors.newPassword?.type === "minLength" && <p className="text-red-500 text-xs">Enter a password of at least 8 characters</p>}
        <label
          htmlFor="new-password-check"
          className="block mb-2 text-gray-500 mt-6"
        >
          Password check
        </label>
        <input
          id="new-password-check"
          type="password"
          className="w-72 bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="New password check"
          {...register("newPasswordCheck", { required: true, minLength: 8, validate: (val) => val === watch("newPassword") })}
        />
        {errors.newPasswordCheck?.type === "validate" && <p className="text-red-500 text-xs">Check password email</p>}
        <input
          type="submit"
          value="update password"
          className="w-72 rounded-2xl py-4 bg-violet-600 text-white font-bold mt-6"
        />
      </form>
    </MYPageSubLayout>
  );
}