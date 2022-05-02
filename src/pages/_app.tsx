import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles/global.styles';
import Layout from '@/layout/Layout';
import '@/styles/css/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Layout>
  );
}
