import Link from "next/link";
import {
  FC,
} from "react";

export const Header: FC = () => {
  return (
    <header className="relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
      <nav className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center py-[2.125rem]">
          <Link className="mr-auto flex-none text-slate-900" href={"/"}>narumir</Link>
          <div className="hidden lg:flex lg:items-center">
            <Link className="m-2" href={"/about"}>about</Link>
            <Link className="m-2" href={"/posts"}>posts</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
