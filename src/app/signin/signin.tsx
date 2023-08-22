'use client';

import {
  FC,
  useTransition,
} from "react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  LoginForm,
  encryptPassword,
  signin,
} from "./actions";

type Props = {
  publicKey: string;
}
const Signin: FC<Props> = ({ publicKey }) => {
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (body) => {
    startTransition(() => {
      body.password = encryptPassword(publicKey, body.password);
      signin(body).then((result) => {
        if (result.success === true) {
          window.location.href = "/";
          return;
        }
        alert("로그인에 실패하였습니다.");
      });
    });
  };
  return (
    <form className="my-32 w-72 sm:w-1/3 m-auto" onSubmit={handleSubmit(onSubmit)}>
      <input className="block w-full h-12 border-b-[1px] mt-8" placeholder="아이디" autoCapitalize="off" autoCorrect="off" {...register("username", { required: true })} />
      {errors.username?.type === "required" && <p className="text-red-500">유저명을 입력해주세요.</p>}
      <input className="block w-full h-12 border-b-[1px] mt-8" placeholder="비밀번호" type="password" {...register("password", { required: true })} />
      {errors.password?.type === "required" && <p className="text-red-500">비밀번호를 입력해주세요.</p>}
      <input className="block w-full h-12 my-2 bg-blue-500 text-white" type="submit" disabled={isPending} value="로그인" />
    </form>
  );
};

export default Signin;
