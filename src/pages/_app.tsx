import {
  Fragment,
} from 'react';
import {
  Header,
} from 'src/components';
import type {
  AppProps,
} from 'next/app'
import "src/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Fragment>
      <Header />
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
