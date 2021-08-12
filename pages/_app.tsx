import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {BaseLayout} from '../components/common/BaseLayout';

function MyApp({Component, pageProps}: AppProps) {
  const isDev = process.env.APP_ENV === 'production';

  return (
    <BaseLayout>
      <Head>
        <title>ICHIJO</title>
        {isDev && <meta name="robots" content="noindex" />}
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
export default MyApp;
