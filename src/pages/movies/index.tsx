import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Filters, MoviesPageDescription } from '@/components';
import { Breadcrumbs, Grid } from '@/UI';

const Movies = () => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.movies'), path: '/movies' },
  ];
  return (
    <>
      <Head>
        <title>{t('title.movies')}</title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <MoviesPageDescription />
      <Filters />
      <Grid type={'FILM'} />
    </>
  );
};

export default Movies;
