import {
  FC,
  PropsWithChildren,
} from "react";
import {
  Header,
} from "src/components";
import './global.css'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ko">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> */}
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" /> */}
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default Layout;
