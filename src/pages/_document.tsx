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
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      </Head>
      <body className="text-[#333]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
