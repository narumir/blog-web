'use client';

import {
  FC,
} from "react";
import {
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  encryptPassword,
} from "src/app/client";
import {
  JoinForm,
} from "src/types";
import {
  join,
} from "src/actions";

type Props = {
  publicKey: string;
}
const Join: FC<Props> = ({ publicKey }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<JoinForm>();
  const onSubmit: SubmitHandler<JoinForm> = (body) => {
    body.password = encryptPassword(publicKey, body.password);
    join(body)
      .then((data) => {
        if (data != null) {
          alert("회원가입에 실패 했습니다.");
        }
      });
  };
  return (
    <div className="my-32 w-full sm:w-96 m-auto">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username" className="mt-8 block">아이디</label>
        <input id="username" className="block w-full h-12 border-b-[1px]" placeholder="아이디" autoCapitalize="off" autoCorrect="off" {...register("username", { required: true })} />
        {errors.username?.type === "required" && <p className="text-red-500">유저명을 입력해주세요.</p>}
        <label htmlFor="nickname" className="mt-8 block">닉네임</label>
        <input className="block w-full h-12 border-b-[1px]" placeholder="닉네임" autoCapitalize="off" autoCorrect="off" {...register("nickname", { required: true })} />
        {errors.nickname?.type === "required" && <p className="text-red-500">닉네임을 입력해주세요.</p>}
        <label htmlFor="password" className="mt-8 block">비밀번호</label>
        <input id="password" className="block w-full h-12 border-b-[1px]" placeholder="비밀번호" type="password" {...register("password", { required: true })} />
        {errors.password?.type === "required" && <p className="text-red-500">비밀번호를 입력해주세요.</p>}
        <label htmlFor="password-chekc" className="mt-8 block">비밀번호 확인</label>
        <input id="password-check" className="block w-full h-12 border-b-[1px]" placeholder="비밀번호 확인" type="password" {...register("passwordCheck", { required: true, validate: (val) => watch("password") !== val ? "비밀번호가 일치하지 않습니다." : undefined })} />
        {errors.passwordCheck?.type === "required" && <p className="text-red-500">비밀번호를 입력해주세요.</p>}
        {errors.passwordCheck?.type === "validate" && <p className="text-red-500">{errors.passwordCheck.message}</p>}
        <input className="block w-full h-12 my-2 bg-blue-500 text-white" type="submit" value="회원가입" />
      </form>
    </div>
  );
};

export default Join;
