import { Link } from "react-router";

export function ArticleListItem() {
  return (
    <Link
      to={"/"}
      className="flex justify-between items-start gap-4 border-b pb-8 mb-8"
    >
      <div
      >
        <p
          className="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap"
        >
          sadfasdf
        </p>
        <p
          className="text-sm line-clamp-3 text-ellipsis break-all"
        > 
          asdfasasdfasasdfasasdfasvvasdfasasdfasasdfasasdfasasdfasasdfasasdfasasdfasasdfasasdfasasdfasasdfasasdfasasdf asasdfasasdfasasdfasasdfasasdfasasdfasasdfasasdfas
        </p>
      </div>
      <div className="max-w-24 max-h-24 sm:max-w-32 sm:max-h-48 w-full h-full aspect-square">
        <img
          className="block w-full h-full"
        />
      </div>
    </Link>
  );
}
