import axios from "~/axios";
import dayjs from "dayjs";
import {
  Field,
  Input,
  Label,
} from "@headlessui/react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  type ActionFunctionArgs,
} from "react-router";
import {
  z,
} from "zod";
import {
  DarkModeButton,
} from "~/components/dark-mode-button";
import {
  accessTokenCookie,
  refreshTokenCookie,
} from "~/cookies";
import {
  FormErrorMessage,
} from "~/components/form-error-message";
import type {
  AuthToken,
} from "~/models";

const schema = z.object({
  username: z.string().nonempty({ message: "아이디를 입력하세요" }),
  password: z.string().nonempty({ message: "비밀번호를 입력하세요" }),
});

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = Object.fromEntries(await request.formData());
  const result = schema.safeParse(formData);
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { errors };
  }
  const { data } = await axios.post<AuthToken>(`/api/v1/auth/login`, result.data);
  return redirect("/", {
    headers: [
      ["Set-Cookie", await accessTokenCookie.serialize(data.accessToken, { expires: dayjs(data.accessTokenExpires).toDate() })],
      ["Set-Cookie", await refreshTokenCookie.serialize(data.refreshToken, { expires: dayjs(data.refreshTokenExpires).toDate() })],
    ],
  });
}

export default function LoginPage() {
  const data = useActionData<Awaited<typeof action>>();
  return (
    <div
      className="min-h-screen flex justify-center items-center"
    >
      <div
        className="border border-[#e4e4e7] dark:border-[#27272a] shadow-sm w-full max-w-md bg-[#f3f4f6] dark:bg-[#171717]"
      >
        <div
          className="flex justify-between p-6"
        >
          <div
            className="flex flex-col space-y-1.5"
          >
            <h1
              className="text-2xl font-semibold leading-none tracking-tight"
            >
              로그인
            </h1>
            <p
              className="text-sm text-muted-foreground text-[#71717A] dark:text-[#A1A1A1]"
            >
              계정에 로그인하세요
            </p>
          </div>
          <DarkModeButton />
        </div>
        <Form
          method="POST"
          className="px-6 space-y-2"
        >
          <Field>
            <Label
              className="text-sm font-medium leading-none"
            >
              아이디
            </Label>
            <Input
              className="w-full h-10 rounded-md px-3 py-2 text-sm"
              name="username"
            />
            <FormErrorMessage
              messages={data?.errors.username}
            />
          </Field>
          <Field>
            <Label
              className="text-sm font-medium leading-none"
            >
              비밀번호
            </Label>
            <Input
              type="password"
              className="w-full h-10 rounded-md px-3 py-2 text-sm"
              name="password"
            />
            <FormErrorMessage
              messages={data?.errors.password}
            />
          </Field>
          <Input
            className="w-full h-10 rounded-md px-3 py-2 text-sm inline-flex justify-center items-center bg-[#121212] dark:bg-white font-semibold text-white dark:text-black"
            type="submit"
            value={"로그인"}
          />
        </Form>
        <div
          className="flex flex-col space-y-2 items-center p-6"
        >
          {/* <Link
            to="/forgot-password"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            비밀번호를 잊으셨나요?
          </Link> */}
          <div className="text-sm">
            계정이 없으신가요?&nbsp;
            <Link
              to="/signup"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
}
