import {
  PostItem,
} from "src/components";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default async function MainPage() {
  return (
    <div className="pb-4">
      <div className="flex flex-wrap">
        {arr.map((_, i) => (
          <PostItem post={{}} key={i} />
        ))}
      </div>
      <button className="rounded-2xl bg-blue-500 w-40 h-14 text-white m-auto block mt-8">Load more</button>
    </div>
  );
}
