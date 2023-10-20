import Head from 'next/head';
import { PropsWithChildren, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

export const withTitle = <P,>({
  title,
  Component,
}: {
  Component: (props: P) => ReactElement;
  title: string;
}) => {
  return function PageWithTitle(props: PropsWithChildren<P>) {
    const { t } = useTranslation();
    const pageTitle = `${t(title)} / ivi.ru`;
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} key="title" />
        </Head>
        <Component {...props} />
      </>
    );
  };
};
