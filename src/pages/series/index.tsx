import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import SeriesPageDescription from '@/components/SeriesPage/SeriesPageDescription';
import { useTranslation } from 'react-i18next';
import Filters from '@/components/Filters/Filters';
import Grid from '@/components/Grid/Grid';
import Loader from '@/components/Loader/Loader';

const Series = ({ movies }) => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.series'), path: '/series' },
  ];
  return (
    <>
      <Head>
        <title>{t('title.series') || 'Сериалы смотреть онлайн'}</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <SeriesPageDescription />
      <Filters />
      {movies ? <Grid array={movies} /> : <Loader />}
    </>
  );
};

export default Series;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.SERVER}/film`);
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
};
