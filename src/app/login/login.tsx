'use client';

import JSEncrypt from "jsencrypt";
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
  loginAction,
} from "./actions";
import {
  useRouter,
} from "next/navigation";

type Props = {
  publicKey: string;
}
export const Login: FC<Props> = ({ publicKey }) => {
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    startTransition(() => {
      const encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicKey);
      const encryptResult = encrypt.encrypt(data.password);
      if (encryptResult === false) {
        // login failed
        return;
      }
      data.password = encryptResult;
      loginAction(data).then((result) => {
        if (result) {
          router.push("/");
        } else {
          // login failed
        }
      });
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="아이디" {...register("username", { required: true })} />
      <input placeholder="비밀번호" type="password" {...register("password", { required: true })} />
      <input type="submit" disabled={isPending} />
    </form>
  );
};
