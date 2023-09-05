import {
  FC,
  PropsWithChildren,
} from "react";
import SignOut from "./signout";
import Link from "next/link";

const MyPageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container m-auto px-5 w-full">
      <h1 className="font-black text-5xl sm:text-7xl pt-16 pb-6">MYPAGE</h1>
      <div className="flex mt-8">
        <div className="w-1/6">
          <Link className="block" href={"/mypage"}>개인설정</Link>
          <Link className="block" href={"/mypage/posts"}>개인 게시글</Link>
          <SignOut />
        </div>
        <div className="w-5/6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MyPageLayout;
