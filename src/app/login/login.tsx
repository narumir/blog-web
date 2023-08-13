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
  useRouter,
} from "next/navigation";

type Props = {
  publicKey: string;
}
type LoginForm = {
  username: string;
  password: string;
}
const Login: FC<Props> = ({ publicKey }) => {
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();
  const router = useRouter();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    startTransition(() => {
      if (window == null) {
        return;
      }
      const encrypt = new JSEncrypt();
      encrypt.setPublicKey(publicKey);
      const encryptResult = encrypt.encrypt(data.password);
      if (encryptResult === false) {
        // login failed
        return;
      }
      data.password = encryptResult;
      fetch("/api/auth/signin", {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        }
      }).then((res) => {
        return res.json()
      }).then((result) => {
        router.push("/");
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

export default Login;
