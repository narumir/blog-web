import {
  AppProps,
} from "next/app";
import {
  FC, Fragment,
} from "react";
import {
  Footer,
  Header,
} from "src/components";
import {
  notoSans,
  notoSansKR,
  notoSansJP,
} from "src/fonts";
import {
  cn,
} from "src/utils-client";
import "./global.css";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Header />
      <main className={cn(notoSans.className, notoSansKR.className, notoSansJP.className)}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
};

export default App;
