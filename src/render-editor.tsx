import sanitizeHtml, {
  IOptions as SanitizeOptions,
} from "sanitize-html";
import {
  OutputData,
} from "@editorjs/editorjs";
import {
  FC,
} from "react";

const options: SanitizeOptions = {
  allowedTags: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "b", "br", "em", "i", "small", "strong", "span"],
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading']
  },
}

type Props = {
  data?: OutputData;
}
export const RenderPost: FC<Props> = ({ data }) => {

  // const headerLevels = [, , h2, h3, h4, h5];
  const elements = data?.blocks.map((value) => {
    console.log(value)
    switch (value.type) {
      case "paragraph":
        const html = sanitizeHtml(value.data.text, options);
        return (<p key={value.id} dangerouslySetInnerHTML={{ __html: html }} ></p >)
      case "header":

      default:
        return undefined;
    }
  });
  return (
    <>{elements}</>
  );
};
