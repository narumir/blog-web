import {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import {
  FC,
} from "react";

const Document: FC = () => {
  return (
    <Html lang="ko">
      <Head />
      <body className="text-[#333]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
