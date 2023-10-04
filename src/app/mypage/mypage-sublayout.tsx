'use client';

import {
  useRouter,
} from "next/navigation";
import {
  PropsWithChildren,
} from "react";
import {
  ArrowLeftIcon,
} from "src/icons";

type Props = PropsWithChildren & {
  title: string,
}
export function MYPageSubLayout({ children, title }: Props) {
  const router = useRouter();
  return (
    <div
      className="p-4"
    >
      <div
        className="w-full md:max-w-[760px] m-auto rounded-2xl bg-white p-4"
      >
        <div
          className="flex items-center py-2"
        >
          <button onClick={() => router.back()}>
            <ArrowLeftIcon
              className="text-black"
            />
          </button>
          <h2
            className="text-xl font-bold ml-2"
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </div>
  );
}
