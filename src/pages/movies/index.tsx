import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import MoviesPageDescription from '@/components/MoviesPage/MoviesPageDescription';
import Filters from '../../components/Filters/Filters';
import { useTranslation } from 'react-i18next';
import Grid from '@/components/Grid/Grid';
import Loader from '@/components/Loader/Loader';

const Movies = ({ movies }) => {
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
      {movies ? <Grid array={movies} /> : <Loader />}
    </>
  );
};

export default Movies;

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER}/film`);
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
};
