import axios from "~/axios";
import {
  Field,
  Input,
  Label,
} from "@headlessui/react";
import {
  Controller,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import {
  NoSSR,
} from "~/components/no-ssr";
import {
  BlockNoteEditor,
} from "~/components/editor";
import {
  FormErrorMessage,
} from "~/components/form-error-message";
import type {
  Route,
} from "./+types/page";
import type {
  Article,
  ArticleStatus,
} from "~/models";
import {
  redirect,
  useSubmit,
} from "react-router";
import {
  auth,
} from "~/get-token";

export async function action({ request }: Route.ActionArgs) {
  return auth(request, async (accessToken) => {
    const formData = await request.formData();
    const { data } = await axios.post<Article>("/api/v1/articles", Object.fromEntries(formData), {
      headers: {
        Authorization: `bearer ${accessToken}`,
      },
    });
    return redirect(`/articles/${data.id}`);
  });
}

type ArticleWriterForm = {
  title: string,
  content: string,
  status: ArticleStatus,
};
export default function ArticleWriter({ loaderData }: Route.ComponentProps) {
  const submit = useSubmit();
  const { control, formState: { errors }, register, handleSubmit } = useForm<ArticleWriterForm>();
  const onSubmit: SubmitHandler<ArticleWriterForm> = async (data) => {
    console.log(data);
    submit(data, { action: "/articles/new", method: "post" });
  };

  return (
    <div
      className="lg:max-w-4xl mx-auto"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <Input
          className={`w-full outline-none bg-transparent font-bold text-4xl px-4 ${errors.title != null ? "dark:placeholder:text-red-400 placeholder:text-red-600 dark:text-red-400 text-red-600" : ""}`}
          placeholder="제목을 입력하세요."
          {...register("title", { required: true })}
        />
        <NoSSR>
          <Controller
            control={control}
            name="content"
            render={({ field }) => (
              <BlockNoteEditor
                onChange={field.onChange}
              />
            )}
          />
        </NoSSR>
        <div
          className="flex justify-between items-center px-4"
        >
          <div>
            <div className="flex gap-4">
              <span>
                공개여부
              </span>
              <div
                className="flex gap-5"
              >
                <Field
                  className="flex items-center"
                >
                  <Input
                    type="radio"
                    value={"DRAFT"}
                    {...register("status", { required: "공개여부를 선택해주세요" })}
                  />
                  <Label
                    className="ml-2 text-sm"
                  >
                    임시저장
                  </Label>
                </Field>
                <Field
                  className="flex items-center"
                >
                  <Input
                    type="radio"
                    value={"PRIVATE"}
                    className="w-4 h-4"
                    {...register("status", { required: "공개여부를 선택해주세요" })}
                  />
                  <Label
                    className="ml-2 text-sm"
                  >
                    비공개
                  </Label>
                </Field>
                <Field
                  className="flex items-center"
                >
                  <Input
                    type="radio"
                    value={"PUBLISHED"}
                    className="w-4 h-4"
                    {...register("status", { required: "공개여부를 선택해주세요" })}
                  />
                  <Label
                    className="ml-2 text-sm"
                  >
                    공개
                  </Label>
                </Field>
              </div>
            </div>
            <FormErrorMessage
              messages={errors.status?.message}
            />
          </div>
          <input
            className="block h-10 px-3 py-2 rounded-md bg-[#121212] dark:bg-white text-white dark:text-black"
            type="submit"
            value={"업로드"}
          />
        </div>
      </form>
    </div>
  );
}
