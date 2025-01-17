import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useCallback, useState } from "react";


import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

type BlockNoteEditorProps = {

};
export default function BlockNoteEditor() {
  const [content, setContent] = useState<string>();
  const editor = useCreateBlockNote({
  });
  const onEditorChange = useCallback(() => {
    const data = JSON.stringify(editor.document);
    setContent(data);
  }, []);

  return (
    <BlockNoteView
      editor={editor}
      onChange={onEditorChange}
    />
  );
}
