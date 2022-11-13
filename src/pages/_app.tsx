import createCache from '@emotion/cache';
import globalStyle from "src/global-style";
import {
  CacheProvider,
  Global,
} from '@emotion/react';
import type {
  AppProps,
} from 'next/app'

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </CacheProvider>
  );
};

export default App;
