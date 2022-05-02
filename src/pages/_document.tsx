import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <link href="/favicon.ico" rel="shortcut icon" />
        <meta name="theme-color" content="#f2ece9" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
