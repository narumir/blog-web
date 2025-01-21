import dayjs from "dayjs";
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
      <h1
        className="font-bold text-4xl px-4 mb-2"
      >
        {article.title}
      </h1>
      <div
        className="border-b pb-6 px-4 flex gap-2"
      >
        <span>
          {article.member.nickname}
        </span>
        <span>
          {dayjs(article.publishedAt).format("YYYY-MM-DD hh:mm")}
        </span>
      </div>
      <div
        className="p-4"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
