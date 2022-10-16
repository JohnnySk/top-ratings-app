import '../styles/globals.css';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }): JSX.Element {
  return <>
      <Head>
        <title>MyTop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>;
}

export default MyApp;
