import {
  ArticleList,
  ArticleListItem,
  ArticleListMore,
} from "~/components/article-list";
import type {
  Route,
} from "./+types/page";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <ArticleList
        totalArticles={16}
      >
        <ArticleListItem />
        <ArticleListItem />
        <ArticleListItem />
        <ArticleListItem />
        <ArticleListMore />
      </ArticleList>
    </div>
  )
}
