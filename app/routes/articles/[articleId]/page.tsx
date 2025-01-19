import axios from "app/axios";
import {
  useLoaderData,
} from "react-router";
import {
  auth,
} from "~/get-token";
import type {
  Article,
} from "~/models";
import type {
  Route,
} from "./+types/page";

export async function loader({ request, params }: Route.LoaderArgs) {
  return await auth(request, async (accessToken) => {
    const { data } = await axios.get<Article>(`/api/v1/articles/${params.articleId}`, {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    return data;
  });
}

export default function ArticlePage() {
  const article = useLoaderData<typeof loader>();
  const content = JSON.parse(article.content);
  console.log(content)
  return (
    <div
      className="lg:max-w-4xl mx-auto"
    >
      <h1>{article.title}</h1>
      {article.member.nickname}
    </div>
  );
}
