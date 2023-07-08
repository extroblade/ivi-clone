import Head from 'next/head';
import React from 'react';
import Carousel from '@/UI/Carousel/Carousel';
import MainPageDescription from '@/components/Descriptions/MainPageDescription';
import PromoCarousel from '@/UI/Carousel/PromoCarousel/PromoCarousel';
import Card from '@/UI/Card/Card';
import { useTranslation } from 'react-i18next';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import Top10Carousel from '@/UI/Carousel/Top10Carousel/Top10Carousel';
import Loader from '@/UI/Loader/Loader';
import { iFilm } from '@/types/kinopoiskTypes';

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
      <Carousel
        title={t('carousels.foreign-series')}
        route={'/movies'}
        showAll={moviesSecond?.total > 15}
      >
        {(moviesFirst?.total ? moviesFirst.items : [...new Array(15)])
          .slice(0, 15)
          .map((card, index) => (
            <Card card={card} star book find block key={card?.id || index} />
          ))}
      </Carousel>
      {moviesSecond?.total ? (
        <Carousel
          title={t('carousels.adventures')}
          route={'/movies'}
          showAll={moviesSecond?.total > 15}
        >
          {moviesSecond.items.slice(0, 15).map((card: iFilm, index: number) => (
            <Card card={card} star book find block key={card?.kinopoiskId || index} />
          ))}
        </Carousel>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
