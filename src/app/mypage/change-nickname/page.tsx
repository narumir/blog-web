'use client';

import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  MYPageSubLayout,
} from "../mypage-sublayout";

type NicknameForm = {
  nickname: string,
}
export default function ChangeNicknamePage() {
  const { register, handleSubmit, formState: { errors } } = useForm<NicknameForm>();
  const onSubmit: SubmitHandler<NicknameForm> = (data) => {
    console.log(data);
  };

  return (
    <MYPageSubLayout title="Change password">
      <form
        className="mt-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label
          htmlFor="nickname"
          className="block mb-2 text-gray-500 mt-6"
        >
          Nickname
        </label>
        <input
          id="nickname"
          type="text"
          className="w-72 bg-gray-100 py-4 px-6 font-semibold text-sm rounded-lg block"
          placeholder="Nickname"
          {...register("nickname", { required: true, minLength: 2 })}
        />
        {errors.nickname?.type === "required" && <p className="text-red-500 text-xs">Enter a nickname</p>}
        {errors.nickname?.type === "minLength" && <p className="text-red-500 text-xs">Enter at least 2 characters</p>}
        <input
          type="submit"
          value="update"
          className="w-72 rounded-2xl bg-violet-600 text-white py-4 mt-6"
        />
      </form>
    </MYPageSubLayout>
  );
}
