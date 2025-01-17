import type {
  PropsWithChildren,
} from "react";

type ArticleListProps = {
  totalArticles: number,
};
export function ArticleList({ children, totalArticles }: PropsWithChildren<ArticleListProps>) {
  return (
    <div
      className="lg:max-w-4xl mx-auto"
    >
      <div
        className="flex justify-between items-center px-5 py-6 md:p-10 mb-8 border-b"
      >
        <p
          className="text-sm font-semibold"
        >
          전체 글 ({totalArticles})
        </p>
      </div>
      <div
        className="flex flex-col px-5 md:px-8 lg:px-0"
      >
        {children}
      </div>
    </div>
  );
}
