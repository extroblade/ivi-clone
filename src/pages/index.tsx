import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardProps } from '@/entities/card';
import { CardInfo } from '@/entities/card/info';
import { Carousel } from '@/entities/carousel';
import { MainDescription } from '@/entities/descriptions';
import { AddToFavoritesButton } from '@/features/add-movie-to-favorites/ui/add-to-favorites';
import { BlockButton } from '@/features/block-movie/ui/block';
import { FindSimilarButton } from '@/features/find-similar-movie/ui/find-similar';
import { RateButton } from '@/features/rate-button/ui/rate';
import { Title } from '@/newui';
import { useFetchAllFilmsQuery } from '@/shared/services';
import { PromoCarousel } from '@/widgets/promo/ui/PromoCarousel';
import { TopTenCarousel } from '@/widgets/top-10';

const CardWithProps = ({ card }: CardProps) => {
  return (
    <Card
      buttons={
        <>
          <AddToFavoritesButton appearance={'transparent'} />
          <FindSimilarButton appearance={'transparent'} />
          <RateButton appearance={'transparent'} />
          <BlockButton appearance={'transparent'} />
        </>
      }
      info={<CardInfo card={card} />}
      card={card}
    />
  );
};

const Home = () => {
  const { data: anime } = useFetchAllFilmsQuery({
    genres: 24,
    page: 1,
  });
  const { data: adventures } = useFetchAllFilmsQuery({
    type: 'FILM',
    page: 1,
    genres: '4',
  });

  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.home')}</title>
      </Head>
      <PromoCarousel />
      <Title tag={'h4'}>{t('descriptions.main-page-title')}</Title>

      <MainDescription />
      <TopTenCarousel />
      <Carousel
        title={t('carousels.anime') || 'Аниме'}
        route={'/movies?genre=24'}
        showAll={!!anime?.total && anime.total > 15}
      >
        {(anime?.items || Array(15).fill(1)).map((card, index) => (
          <CardWithProps card={card} key={index} />
        ))}
      </Carousel>
      <Carousel
        title={t('carousels.adventures') || 'Приключения'}
        route={'/movies?genres=4'}
        showAll={!!adventures?.total && adventures.total > 15}
      >
        {(adventures?.items || Array(15).fill(1)).map((card, index) => (
          <CardWithProps card={card} key={index} />
        ))}
      </Carousel>
    </>
  );
};

export default Home;
