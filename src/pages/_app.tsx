import App, {
  AppContext,
  AppInitialProps,
  AppProps,
} from "next/app";
import {
  Fragment,
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
  Auth,
  accessTokenCookieName,
  cn,
  cookieParser,
  decodeToken,
} from "src/utils";
import "./global.css";

type MyAppProps = {
  auth?: Auth;
}

const MyApp = ({ Component, pageProps, auth }: AppProps & MyAppProps) => {
  return (
    <Fragment>
      <Header auth={auth} />
      <main className={cn(notoSans.className, notoSansKR.className, notoSansJP.className)}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Fragment>
  );
};
MyApp.getInitialProps = async (context: AppContext): Promise<AppInitialProps & MyAppProps> => {
  const initialProps = await App.getInitialProps(context);
  const cookies = cookieParser(context.ctx.req?.headers.cookie ?? "");
  let auth: Auth | undefined = undefined;
  if (Object.hasOwn(cookies, accessTokenCookieName)) {
    auth = decodeToken(cookies[accessTokenCookieName])
  }
  return { ...initialProps, auth }
}
export default MyApp;
