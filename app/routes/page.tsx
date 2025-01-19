import axios from "~/axios";
import {
  useState,
} from "react";
import {
  useLoaderData,
} from "react-router";
import {
  ArticleList,
  ArticleListItem,
  ArticleListMore,
} from "~/components/article-list";
import {
  auth,
} from "~/get-token";
import type {
  Route,
} from "./+types/page";
import type {
  Article,
} from "~/models";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs) {
  return auth(request, async (accessToken) => {
    const { data } = await axios.get<Article[]>(`/api/v1/articles`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    return { data };
  });
}

export default function Home() {
  const { data } = useLoaderData<typeof loader>();
  const [articles, setArticles] = useState<Article[]>(data);
  return (
    <div>
      <ArticleList
        totalArticles={16}
      >
        {articles.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
          />
        ))}
        <ArticleListMore />
      </ArticleList>
    </div>
  );
}
