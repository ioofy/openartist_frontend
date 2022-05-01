import { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '@/styles/global.styles';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />;
    </>
  );
}
