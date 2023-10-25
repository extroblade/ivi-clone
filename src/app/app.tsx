import './styles/global.scss';
import './i18n';

import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { Next13ProgressBar } from 'next13-progressbar';
import { Provider } from 'react-redux';

import { wrapper } from '@/shared/store';

import { iviSans } from './fonts';
import { Layout } from './layout';
import { Modals } from './modals';

dayjs.extend(duration);

export const App = ({ Component, pageProps }: AppProps) => {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>
            Онлайн-кинотеатр Иви - фильмы, сериалы и мультфильмы смотреть онлайн бесплатно в хорошем
            качестве
          </title>
        </Head>
        <Next13ProgressBar
          height="2px"
          color="var(--color-accent)"
          options={{ showSpinner: false }}
          showOnShallow
        />
        <div className={iviSans.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Modals />
        </div>
      </SessionProvider>
    </Provider>
  );
};
