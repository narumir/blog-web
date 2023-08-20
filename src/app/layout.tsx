import {
  FC,
  PropsWithChildren,
} from "react";
import {
  Header,
  Footer,
} from "src/components";
import {
  cn,
} from "src/utils";
import {
  notoSans,
  notoSansJP,
  notoSansKR,
} from "src/fonts";
import {
  AnalyticsScripts,
} from "./analytics-scripts";
import "./global.css";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ko" className={cn(notoSans.className, notoSansKR.className, notoSansJP.className)}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>narumir의 블로그 입니다.</title>
      </head>
      <body className="text-[#333] safe-area-top safe-area-bottom">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <AnalyticsScripts />
      </body>
    </html>
  );
};

export const runtime = 'edge';
export default Layout;
