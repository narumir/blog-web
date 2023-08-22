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

const Editor = dynamic(() => import("src/components/editor"), { ssr: false });

const CreatePostPage: NextPage = () => {

  const [data, setData] = useState<OutputData>();

  const onEditorChanage = useCallback((output: OutputData) => {
    setData(output);
  }, []);

  const savePost = () => {
    console.log(data);
  };

  return (
    <div className="flex flex-wrap xl:flex-nowrap w-max-[1600px] m-auto">
      <div className="w-full xl:w-1/2">
        <div className="border-b-[1px] flex justify-end h-14 px-6 items-center">
          <button className="bg-orange-500 h-8 sm:h-10 text-white rounded-full px-4 leading-8" onClick={savePost}>게시하기</button>
        </div>
        <Editor className="pl-[12px]" onChange={onEditorChanage} />
      </div>
      <div className="w-full hidden xl:block xl:w-1/2 ">
        <RenderPost data={data}></RenderPost>
      </div>
    </div>
  );
};

export default CreatePostPage;
