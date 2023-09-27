import '@/app/styles/global.scss';
import '@/app/(config)/i18n/i18n';

import type { AppProps } from 'next/app';
import localFont from 'next/font/local';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';
import { Next13ProgressBar } from 'next13-progressbar';
import { Provider } from 'react-redux';

import { MainLayout } from '@/app/layouts/MainLayout';
import { wrapper } from '@/shared/store';
import { Modals } from '@/widgets/modals';

const iviSans = localFont({
  src: [
    {
      path: '../../public/fonts/iviSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iviSans-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <SessionProvider session={session}>
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
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <Modals />
        </div>
      </SessionProvider>
    </Provider>
  );
}

export default App;
