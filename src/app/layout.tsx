import {
  FC,
  PropsWithChildren,
} from "react";
import {
  Noto_Sans_KR,
} from "next/font/google";
import {
  Header,
} from "src/components";
import './global.css'

const notoSans = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ko" className={notoSans.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;
