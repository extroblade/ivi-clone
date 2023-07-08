import React from 'react';
import BreadCrumbs from '@/UI/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import MoviesPageDescription from '@/components/Descriptions/MoviesPageDescription';
import Filters from '@/UI/Filters/Filters';
import { useTranslation } from 'react-i18next';
import Grid from '@/UI/Grid/Grid';

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
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <MoviesPageDescription />
      <Filters />
      <Grid type={'FILM'} />
    </>
  );
};

export default Movies;
