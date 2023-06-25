import React from 'react';
import BreadCrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import AnimationPageDescription from '@/components/AnimationPage/AnimationPageDescription';
import { useTranslation } from 'react-i18next';
import Filters from '@/components/Filters/Filters';
import Grid from '@/components/Grid/Grid';
import Loader from '@/components/Loader/Loader';

const Index = ({ movies }) => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.animation'), path: '/series' },
  ];
  return (
    <>
      <Head>
        <title>{t('title.animation') || 'Мультфильмы смотреть онлайн'}</title>
      </Head>
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <AnimationPageDescription />
      <Filters />
      {movies ? <Grid array={movies} /> : <Loader />}
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.SERVER}/film`);
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
};
