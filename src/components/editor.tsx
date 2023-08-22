'use client';

import Header from "@editorjs/header";
import Code from "@editorjs/code";
import EditorJS, {
  OutputData,
} from "@editorjs/editorjs";
import {
  FC,
  useLayoutEffect,
  useRef,
} from "react";

type Props = {
  data?: OutputData,
  onChange?: (data: OutputData) => void,
  className?: string,
}
const Editor: FC<Props> = ({ data, onChange, className }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const invokeRef = useRef<boolean>(false);

  useLayoutEffect(() => {
    if (!invokeRef.current) {
      invokeRef.current = true;
      return;
    }
    if (editorRef.current == null) {
      return;
    }
    const editor = new EditorJS({
      holder: editorRef.current,
      data,
      sanitizer: {
        p: true,
        a: {
          href: true,
          target: "_blank",
        },
        br: true,
      },
      tools: {
        header: Header,
        code: Code,
      },
      onChange: async (api) => {
        if (onChange == null) {
          return;
        }
        const data = await editor.save();
        onChange(data);
      },
    });
    return () => {
      editor.destroy();
    };
  }, []);

  return (
    <div className={className} ref={editorRef} />
  );
};

export default Editor;
