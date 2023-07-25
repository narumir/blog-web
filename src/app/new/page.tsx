'use client';
import {
  useCallback,
  useState,
} from "react";
import {
  NextPage,
} from "next";
import {
  OutputData,
} from "@editorjs/editorjs";
import {
  EditorJS,
  renderEditorJS,
} from "src/components";

const NewPage: NextPage = () => {
  const [data, setData] = useState<OutputData>();

  const onSave = useCallback((data: OutputData) => {
    setData(data);
    console.log(data);
  }, []);

  return (
    <div>
      <EditorJS onChange={onSave} />
      {data && renderEditorJS(data)}
    </div>
  );
};

export default NewPage;
