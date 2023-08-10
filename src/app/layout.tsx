import {
  FC,
  PropsWithChildren,
} from "react";
import './global.css'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>narumir의 블로그 입니다.</title>
      </head>
      <body className="bg-[#EEEEEE]">
        {children}
      </body>
    </html>
  );
};

export default Layout;
