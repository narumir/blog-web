import axios from "~/axios";
import {
  useEffect,
  useState,
} from "react";
import {
  useLoaderData,
} from "react-router";
import {
  useInView,
} from "react-intersection-observer";
import {
  ArticleList,
  ArticleListItem,
} from "~/components/article-list";
import {
  auth,
} from "~/get-token";
import {
  useDarkMode,
} from "~/contexts";
import type {
  Route,
} from "./+types/page";
import type {
  Article,
  ArticleInfo,
} from "~/models";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "나루미르의 블로그 입니다" },
    { name: "description", content: "나루미르의 블로그에 오신것을 환영합니다." },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs) {
  return auth(request, async (accessToken) => {
    const { data } = await axios.get<Article[]>(`/api/v1/articles`);
    const info = await axios.get<ArticleInfo>(`/api/v1/articles/info`);
    const hasMore = data.length !== 0;
    return { data, hasMore, info: info.data };
  });
}

export default function Home() {
  const { isDarkMode } = useDarkMode();
  const { data, hasMore: hasMoreDefaultValue, info } = useLoaderData<typeof loader>();
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [articles, setArticles] = useState<Article[]>(data);
  const [hasMore, setHasMore] = useState<boolean>(hasMoreDefaultValue);
  const [isLoading, setLoadig] = useState<boolean>(false);
  const fetchData = async () => {
    setLoadig(true);
    const latestId = articles.length > 0 ? articles[articles.length - 1].id : undefined;
    const params = new URLSearchParams();
    if (latestId != null) {
      params.append("last", latestId.toString());
    }
    const { data } = await axios.get<Article[]>(`/api/v1/articles?${params.toString()}`);
    setArticles((prev) => [...prev, ...data]);
    if (data.length === 0) {
      setHasMore(false);
    }
    setLoadig(false);
  };
  useEffect(() => {
    if (inView) {
      fetchData();
    }
  }, [inView]);
  return (
    <div>
      <ArticleList
        totalArticles={info.total}
      >
        {articles.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
          />
        ))}
        {isLoading && <div
          className="flex justify-center items-center py-2"
        >
          <img
            alt="loading"
            width={0}
            height={0}
            src={isDarkMode ? "/loading-dark.svg" : "/loading-light.svg"}
            className="animate-spin w-8 h-8"
          />
        </div>}
        {hasMore && <div
          ref={ref}
          style={{ height: "1px" }}
        />}
      </ArticleList>
    </div>
  );
}
