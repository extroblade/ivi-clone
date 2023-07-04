import Head from 'next/head';
import React from 'react';
import Carousel from '@/components/Carousel/Carousel';
import MainPageDescription from '@/components/MainPage/MainPageDescription';
import PromoCarousel from '@/components/Carousel/PromoCarousel/PromoCarousel';
import Card from '@/components/Card/Card';
import { useTranslation } from 'react-i18next';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Top10Carousel from '@/components/Carousel/Top10Carousel/Top10Carousel';
import Loader from '@/components/Loader/Loader';
import { iFilm } from '@/types/kinopoiskTypes';

const Home = () => {
  const { data: movies } = useFetchAllFilmsQuery({ type: 'FILM' });

  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.home')}</title>
      </Head>
      <PromoCarousel />
      <MainPageDescription />
      <Top10Carousel data={movies?.items} />
      <Carousel title={t('carousels.foreign-series')} route={'/movies'}>
        {(movies?.items?.length ? movies.items : [...new Array(15)])
          .slice(0, 10)
          .map((card, index) => (
            <Card card={card} star book find block key={card?.id || index} />
          ))}
      </Carousel>
      {movies?.items?.length ? (
        <Carousel title={t('carousels.adventures')} route={'/movies'} showAll={movies?.length > 15}>
          {movies.items.slice(10, 20).map((card: iFilm, index: number) => (
            <Card card={card} star book find block key={card?.id || index} />
          ))}
        </Carousel>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
