import Link from "next/link";
import Image from "next/image";
import {
  SignDialog,
} from "./sign-dialog";
import {
  PostMenu,
} from "./post-menu";
import {
  MobileMenu,
} from "./mobile-menu";

type Props = {
  isAuth: boolean,
  profile?: string,
}
export function Header({ isAuth, profile }: Props) {
  return (
    <header
      className="h-24 md:h-28 flex justify-between items-center md:justify-end border-b-2"
    >
      <MobileMenu />
      <div
        className="h-full mr-8 md:mr-16 flex justify-end items-center"
      >
        {isAuth && <PostMenu />}
        {!isAuth && <SignDialog />}
        {isAuth &&
          <Link
            href="/mypage"
          >
            <Image
              width={48}
              height={48}
              src={profile || "/user.webp"}
              alt={"profile"}
              className="rounded-full" />
          </Link>}
      </div>
    </header>
  );
}
