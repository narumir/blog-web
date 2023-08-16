import Link from "next/link";
import Image from "next/image";
import {
  FC,
} from "react";
import {
  Auth,
} from "src/utils";

type Props = {
  auth?: Auth;
}

export const Header: FC<Props> = ({ auth }) => {
  return (
    <header className="h-20 sm:h-28 w-full border-b-[1px]">
      <div className="container m-auto w-full h-full flex px-4">
        <div className="flex flex-[1_0_auto] h-full items-center">
          <Link href={"/"} className="w-24">
            <Image width={100} height={100} src={"/logo.png"} alt="narumir's logo" />
          </Link>
        </div>
        <nav className="flex items-center h-full">
          <Link className="rounded-full w-8 sm:w-10 h-8 sm:h-10" href={auth == null ? "/login" : "/mypage"}>
            <Image width={100} height={100} alt="user profile" src={"/user.png"} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
