import Image from "next/image";
import Link from "next/link";
import {
  Post,
} from "src/type";
import {
  domain,
} from "src/utils";

const getPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${domain}/api/post`, { method: "GET", cache: 'no-store' });
  const { data } = await res.json();
  return data;
};
const MainPage = async () => {
  const posts = await getPosts();
  return (
    <div className="container m-auto px-5 pb-16 w-full">
      <h1 className="font-black text-5xl sm:text-7xl pt-16 pb-6">STORIES</h1>
      <section>
        <ul className="flex flex-wrap mt-8">
          {posts.map((post) => (
            <li key={post.id} className="w-full h-96 md:w-1/3">
              <div className="w-full h-44">
                <Image className="object-cover w-full h-full" width={100} height={100} alt="" src="/profile.png" />
              </div>
              <div className="p-4">
                <span className="block">카테고리</span>
                <h2 className="text-xl font-bold pt-2 text-ellipsis	line-clamp-1 overflow-hidden break-all">{post.title}</h2>
                <div className="flex py-2">
                  <Image src={"/profile.png"} width={100} height={100} alt="" className="w-6 h-6 rounded-full" />
                  <span className="mx-2 text-[#808080]">posted by </span><Link href={"/"}>{post.user.nickname}</Link>
                </div>
                <p className="text-ellipsis	line-clamp-2 overflow-hidden break-all pt-2">{post.preview}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="m-auto bg-blue-500 text-white text-center text-xl font-medium w-[256px] h-12 block">게시글 더보기</button>
      </section>
    </div>
  );
};

export default MainPage;
