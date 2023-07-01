import EditorJS, {
  EditorConfig,
} from "@editorjs/editorjs";
import {
  FC,
  MutableRefObject,
  useLayoutEffect,
  useRef,
} from "react";

export const Editor: FC<{ config?: EditorConfig }> = (config) => {
  const invokedRef = useRef<boolean>(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const editor: MutableRefObject<EditorJS | null> = useRef(null);
  useLayoutEffect(() => {
    if (!invokedRef.current || blockRef.current == null) {
      invokedRef.current = true;
      return;
    }
    editor.current = new EditorJS({
      holder: blockRef.current,
      ...config,
    });
    return () => {
      editor.current?.destroy();
    };
  }, [config]);
  return (
    <div ref={blockRef} />
  );
};
