import axios from "app/axios";
import type {
  Route,
} from "./+types/page";

import { Form } from "react-router";
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { NoSSR } from "~/components/no-ssr";

export async function clientAction({
  request,
}: Route.ClientActionArgs) {
  let formData = await request.formData();
  console.log(formData);
  let title = await formData.get("title");
  console.log(title)
  // let project = await someApi.updateProject({ title });
  // return project;
}
const BlockNoteEditor = lazy(() => import("~/components/editor"));


export default function ArticleWriter({ loaderData }: Route.ComponentProps) {
  const [content, setContent] = useState<string>();

  return (
    <div
      className="lg:container mx-auto"
    >
      <Form
        method="POST"
      >
        <input
          name="title"
          placeholder="제목을 입력하세요."
        />
        <Suspense fallback={<div>asdf</div>}>
          <NoSSR>
            <BlockNoteEditor />
          </NoSSR>

        </Suspense>
        <input
          name="content"
          value={content}
          className="hidden"
        />
        <label>
          임시저장
          <input
            type="radio"
            name="status"
            value={"DRAFT"}
          />
        </label>
        <label>
          비공개
          <input
            type="radio"
            name="status"
            value={"PRIVATE"}
          />
        </label>
        <label>
          공개
          <input
            type="radio"
            name="status"
            value={"PUBLISHED"}
          />
        </label>

        <input
          className="block"
          type="submit"
          value={"업로드"}
        />
      </Form>

    </div>
  );
}
