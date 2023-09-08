'use client';

import Link from "next/link";
import {
  FC,
} from "react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  LoginForm,
} from "src/types";
import {
  encryptPassword,
} from "src/app/client";
import {
  signin,
} from "src/actions";

type Props = {
  publicKey: string;
}
const Signin: FC<Props> = ({ publicKey }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = async (body) => {
    body.password = encryptPassword(publicKey, body.password);
    const res = await signin(body);
    if (res?.success === false) {
      alert("아이디 혹은 비밀번호가 다름니다.");
    }
  };
  return (
    <div className="my-32 w-full sm:w-96 m-auto">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username" className="mt-8 block">아이디</label>
        <input id="username" className="block w-full h-12 border-b-[1px]" placeholder="아이디" autoCapitalize="off" autoCorrect="off" {...register("username", { required: true })} />
        {errors.username?.type === "required" && <p className="text-red-500">유저명을 입력해주세요.</p>}
        <label htmlFor="password" className="mt-8 block">비밀번호</label>
        <input id="password" className="block w-full h-12 border-b-[1px]" placeholder="비밀번호" type="password" {...register("password", { required: true })} />
        {errors.password?.type === "required" && <p className="text-red-500">비밀번호를 입력해주세요.</p>}
        <input disabled={isSubmitting} className="block w-full h-12 my-2 bg-blue-500 text-white" type="submit" value="로그인" />
      </form>
      <Link className="text-blue-500" href={"/join"}>create account</Link>
    </div>
  );
};

export default Signin;
