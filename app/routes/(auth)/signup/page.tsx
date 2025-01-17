import {
  Field,
  Input,
  Label,
} from "@headlessui/react";
import {
  Link,
} from "react-router";
import {
  DarkModeButton,
} from "~/components/dark-mode-button";

export default function SignUpPage() {
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
              회원가입
            </h1>
            <p
              className="text-sm text-muted-foreground text-[#71717A] dark:text-[#A1A1A1]"
            >
              새 계정을 만들어보세요
            </p>
          </div>
          <DarkModeButton />
        </div>
        <form
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
            />
          </Field>
          <Field>
            <Label
              className="text-sm font-medium leading-none"
            >
              비밀번호 획인
            </Label>
            <Input
              type="password"
              className="w-full h-10 rounded-md px-3 py-2 text-sm"
            />
          </Field>
          <Field>
            <Label
              className="text-sm font-medium leading-none"
            >
              닉네임
            </Label>
            <Input
              className="w-full h-10 rounded-md px-3 py-2 text-sm"
            />
          </Field>
          <Input
            className="w-full h-10 rounded-md px-3 py-2 text-sm inline-flex justify-center items-center bg-[#121212] dark:bg-white font-semibold text-white dark:text-black"
            type="submit"
            value={"회원가입"}
          />
        </form>
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
            이미 계정이 있으신가요?&nbsp;
            <Link
              to="/login"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
