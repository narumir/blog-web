import Image from "next/image";
import Link from "next/link";
import {
  FC,
  PropsWithChildren,
} from "react";

export const PostContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="container m-auto w-[320px] md:w-[704px] xl:w-[1056px] 2xl:w-[1408px]">
      <div className="flex flex-wrap">
        {children}
      </div>
    </div>
  );
};

export const PostItem: FC = () => {
  return (
    <div className="rounded-md w-[20rem] h-[24rem] m-4 bg-white flex flex-col justify-stretch">
      <div className="h-1/2">
        <div className="rounded-md relative overflow-hidden h-full">
          <Image width={400} height={500} src="profile.png" alt="dd" className="object-cover absolute inset-0 w-full h-full" />
        </div>
      </div>
      <div className="h-1/2 m-4 flex flex-col flex-1 justify-between">
        <Link href={"/"} className="block">
          <h4 className="text-base break-words text-ellipsis whitespace-nowrap overflow-hidden">게시글 제목입니다람dsfdfsdff쥐ㅣ딜ㅈㄷㄹㄷ</h4>
          <div className="">
            <p style={{ wordBreak: "break-word" }} className="break-words text-xs h-[3rem] line-clamp-3 overflow-hidden text-ellipsis">
              asdfmjlkasdjfasdjklfjasdlkfjasldjflaksdjflkasdfmjlkasdjfasdjklfjasdlkfjasldjflaksdjflk;asdjasdfmjlkasdjfasdjklfjasdlkfjasldjflaksdjflk;asdjasdfmjlkasdjfasdjklfjasdlkfjasldjflaksdjflk;asdj;asdj
            </p>
          </div>
        </Link>
        <div className="text-xs">날자 날짜</div>
      </div>
      <div className="m-4">by narumir</div>
    </div>
  );
};

