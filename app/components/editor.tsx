import {
  BlockNoteView,
} from "@blocknote/mantine";
import {
  useCreateBlockNote,
} from "@blocknote/react";
import {
  useCallback,
} from "react";
import {
  useDarkMode,
} from "~/contexts";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";

type BlockNoteEditorProps = {
  onChange: (doc: string) => void,
};
export function BlockNoteEditor({ onChange }: BlockNoteEditorProps) {
  const { isDarkMode } = useDarkMode();
  const editor = useCreateBlockNote();
  const onEditorChange = useCallback(() => {
    const data = JSON.stringify(editor.document);
    onChange(data);
  }, []);

  return (
    <BlockNoteView
      className="min-h-96"
      theme={isDarkMode ? "dark" : "light"}
      editor={editor}
      onChange={onEditorChange}
    />
  );
}
