import Image from "next/image";
import Link from "next/link";

const i = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function MainPage() {
  return (
    <div className="container m-auto px-5 w-full">
      <h1 className="font-black text-5xl sm:text-7xl pt-16 pb-6">STORIES</h1>
      <section>
        <ul className="flex flex-wrap mt-8">
          {i.map((_, i) => (
            <li key={i} className="w-full h-96 md:w-1/3">
              <div className="w-full h-44">
                <Image className="object-cover w-full h-full" width={100} height={100} alt="" src="/profile.png" />
              </div>
              <div className="p-4">
                <span className="block">카테고리</span>
                <h2 className="text-xl font-bold pt-2 text-ellipsis	line-clamp-1 overflow-hidden break-all">뭔가 재미 있는 게시글22222222222222222222222222</h2>
                <div className="flex py-2">
                  <Image src={"/profile.png"} width={100} height={100} alt="" className="w-6 h-6 rounded-full" />
                  <span className="mx-2 text-[#808080]">posted by </span>
                  <Link href={"/"}>{`narumir`}</Link>
                </div>
                <p className="text-ellipsis	line-clamp-2 overflow-hidden break-all pt-2">dhvdfhglkdjhglkdsfjglk;sdjf;lgkjsdflkfgjsdfkl;gjslkd;fjglk;sdfjglkdsfjglkdsfjglksdjfglksdjflgjsdflgjsdlfkgjdlskfjglsdfkjglksdfjglsdjfgl</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
