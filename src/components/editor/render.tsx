import {
  OutputData,
} from "@editorjs/editorjs";

export const renderEditorJS = (data: OutputData) =>
  data.blocks.map((block) => {
    switch (block.type) {
      case "paragraph":
        return (<p key={block.id} dangerouslySetInnerHTML={{ __html: block.data.text }} />);
    }
  });
