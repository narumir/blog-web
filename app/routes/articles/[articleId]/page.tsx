import axios from "app/axios";
import {
  ServerBlockNoteEditor,
} from "@blocknote/server-util";
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
    const editor = ServerBlockNoteEditor.create();
    data.content = await editor.blocksToFullHTML(JSON.parse(data.content));
    return data;
  });
}

export default function ArticlePage() {
  const article = useLoaderData<typeof loader>();
  return (
    <div
      className="lg:max-w-4xl mx-auto"
    >
      <h1>{article.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      {article.member.nickname}
    </div>
  );
}
