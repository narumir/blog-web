import sanitize from "sanitize-html";
import {
  OutputData,
} from "@editorjs/editorjs";

export const renderEditorJS = (data: OutputData) =>
  data.blocks.map((block) => {
    switch (block.type) {
      case "paragraph":
        const clean = sanitize(block.data.text);
        return (<p key={block.id} dangerouslySetInnerHTML={{ __html: clean }} />);
    }
  });

/**
 * 나중에 적용하면 좋은 코드 브라우저단에서 지원하는 sanitizer
 * https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API
 */
