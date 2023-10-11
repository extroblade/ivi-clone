import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { Carousel } from '@/entities/carousel';
import { MainDescription } from '@/entities/descriptions';
import { Title } from '@/newui';
import { useFetchAllFilmsQuery } from '@/shared/services';
import { CardWithProps } from '@/widgets/cards';
import { Promo } from '@/widgets/promo/ui/promo';
import { TopTenCarousel } from '@/widgets/top-10';

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
      <Promo />
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
