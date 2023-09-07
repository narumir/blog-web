import Link from "next/link";
import Image from "next/image";
import {
  headers,
} from "next/headers";
import {
  decodeToken,
} from "src/utils";

export const Header = () => {
  const headersInstance = headers();
  const accessToken = headersInstance.get("authorization");
  const decode: Record<string, string> = accessToken != null ? decodeToken(accessToken) : {};
  return (
    <header className="h-20 sm:h-28 w-full border-b-[1px]">
      <div className="container m-auto w-full h-full flex px-4">
        <div className="flex flex-[1_0_auto] h-full items-center">
          <Link href={"/"} className="w-24">
            <Image width={96} height={96} src={"/logo.webp"} alt="narumir's logo" />
          </Link>
        </div>
        <nav className="flex items-center h-full">
          {accessToken != null && <Link className="h-8 sm:h-10 bg-blue-500 text-white rounded-full px-4 font-bold leading-8 sm:leading-10 mr-4" href={"/new"}>글 작성</Link>}
          <Link className="rounded-full w-8 sm:w-10 h-8 sm:h-10" href={accessToken == null ? "/signin" : "/mypage"}>
            <Image width={40} height={40} alt="user profile" src={decode["profile"] ?? "/user.webp"} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
