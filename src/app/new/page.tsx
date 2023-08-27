'use client';

import dynamic from "next/dynamic";
import {
  OutputData,
} from "@editorjs/editorjs";
import {
  NextPage,
} from "next";
import {
  useCallback,
  useState,
} from "react";
import {
  RenderPost,
} from "src/render-editor";
import {
  createPost,
} from "./actions";

const Editor = dynamic(() => import("src/components/editor"), { ssr: false });
const CreatePostPage: NextPage = () => {
  const [title, setTitle] = useState<string>();
  const [post, setPost] = useState<OutputData>();

  const onEditorChanage = useCallback((output: OutputData) => {
    setPost(output);
  }, []);

  const savePost = () => {
    createPost(title, post)
      .then(({ data, error }) => {
        console.log(data);
      });
  };

  return (
    <div className="flex flex-wrap xl:flex-nowrap justify-center m-auto">
      <div className="w-full xl:max-w-[800px]">
        <div className="pl-[12px] m-auto max-w-[700px] w-full mt-4">
          <input className="text-3xl sm:text-5xl w-full focus:outline-0 mb-4" placeholder="제목을 입력하세요." onChange={(e) => setTitle(e.target.value)} />
          <Editor className="w-full" onChange={onEditorChanage} />
        </div>
        <div className="border-t-[1px] flex justify-end h-14 px-6 items-center">
          <button className="bg-orange-500 h-8 sm:h-10 text-white rounded-full px-4 leading-8" onClick={savePost}>게시하기</button>
        </div>
      </div>
      <div className="w-full hidden xl:block bg-[#f3f3f3] p-4">
        <h1>{title}</h1>
        <RenderPost data={post} />
      </div>
    </div>
  );
};

export default CreatePostPage;
