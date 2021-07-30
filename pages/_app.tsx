import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {BaseLayout} from '../components/common/BaseLayout';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <BaseLayout>
      <Head>
        <title>PRODUCT X</title>
      </Head>
      <Component {...pageProps} />
    </BaseLayout>
  );
}
export default MyApp;
