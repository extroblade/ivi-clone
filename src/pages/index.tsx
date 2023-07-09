import Head from 'next/head';
import React from 'react';
import Carousel from '@/UI/Carousel/Carousel';
import MainPageDescription from '@/components/Descriptions/MainPageDescription';
import PromoCarousel from '@/UI/Carousel/PromoCarousel/PromoCarousel';
import { useTranslation } from 'react-i18next';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Top10Carousel from '@/UI/Carousel/Top10Carousel/Top10Carousel';

const Home = () => {
  const { data: moviesFirst } = useFetchAllFilmsQuery({ type: 'FILM', page: 1 });
  const { data: moviesSecond } = useFetchAllFilmsQuery({ type: 'FILM', page: 2 });

  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.home')}</title>
      </Head>
      <PromoCarousel />
      <MainPageDescription />
      <Top10Carousel />
      <Carousel title={t('carousels.foreign-series')} movies={moviesFirst} route={'/movies'} />
      <Carousel title={t('carousels.adventures')} movies={moviesSecond} route={'/movies'} />
    </>
  );
};

export default Home;
