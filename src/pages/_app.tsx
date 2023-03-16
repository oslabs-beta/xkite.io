import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface xKiteAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

function xKiteApp(props: xKiteAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);

  Router.events.on('routeChangeStart', nProgress.start);
  Router.events.on('routeChangeError', nProgress.done);
  Router.events.on('routeChangeComplete', nProgress.done);

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>xkite: Kafka Prototyping, Testing, and Monitoring Suite</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {/* <link rel='icon' href='/navbar/logo.png' />
          
          <link rel='xkite-logo' sizes='180x180' href='/navbar/logo.png' /> */}
          {/* <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          /> */}
          {/* <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' /> */}
          <link rel="apple-touch-icon" sizes="180x180" href="/navbar/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/navbar/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/navbar/favicon-16x16.png" />
          <link rel="manifest" href="/navbar/site.webmanifest" />
          <link rel="mask-icon" href="/navbar/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <ThemeProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {/* <NavBar /> */}
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </LocalizationProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default xKiteApp;
