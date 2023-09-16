import Image from "next/image";
import {
  Post,
} from "src/types";

type Props = {
  post: any,
};
export function PostItem({ post }: Props) {
  return (
    <div className="rounded-3xl bg-white w-full sm:w-[calc(50%-2rem)] md:w-72 h-96 m-4">
      <div className="relative">
        <Image alt="" width={303} height={170} src={"/profile.webp"} className="w-full h-40 object-cover rounded-r-3xl rounded-l-3xl" />
      </div>
      <div className="p-6">
        <h2 className="text-xl text-ellipsis line-clamp-2 overflow-hidden break-all">hellosssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h2>
        <span className="block text-xs">카테고리</span>
        <div className="my-4 flex">
          <Image alt="" width={32} height={32} src={"/profile.webp"} className="rounded-full w-8 h-8" />
          <p className="ml-2">posted by narumir</p>
        </div>
        <p className="text-sm text-ellipsis line-clamp-2 overflow-hidden break-all">가나다라sssssssssssssssssssssssssssssssssssssssssssssssssddddddddddssssssssssssssssssss</p>
      </div>
    </div>
  );
}
