import EditorJS, {
  EditorConfig,
  OutputData,
} from "@editorjs/editorjs";
import {
  FC,
  MutableRefObject,
  useLayoutEffect,
  useRef,
} from "react";

type EditorProps = {
  config?: Omit<EditorConfig, "holder" | "holderId" | "onChange">;
  onChange?: (data: OutputData) => void;
}

export const EditorComponent: FC<EditorProps> = ({ config, onChange }) => {
  const blockRef = useRef<HTMLDivElement>(null);
  const invokedRef = useRef<boolean>(false);
  const editor: MutableRefObject<EditorJS | null> = useRef(null);
  useLayoutEffect(() => {
    if (!invokedRef.current || blockRef.current == null) {
      invokedRef.current = true;
      return;
    }
    editor.current = new EditorJS({
      holder: blockRef.current,
      ...config,
      onChange: async (api, _event) => {
        if (onChange == null) {
          return;
        }
        const data = await api.saver.save();
        onChange(data);
      },
    });
    return () => {
      editor.current?.destroy();
    };
  }, [config, onChange]);
  return (
    <div ref={blockRef} />
  );
};
