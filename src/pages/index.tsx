import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { MainPageDescription } from '@/components';
import { useFetchAllFilmsQuery } from '@/shared/services';
import { Carousel, PromoCarousel, Top10Carousel } from '@/UI';

const Home = () => {
  const { data: foreignSeries } = useFetchAllFilmsQuery({
    order: 'NUM_VOTE',
    type: 'TV_SERIES',
    page: 1,
  });
  const { data: adventures } = useFetchAllFilmsQuery({
    order: 'NUM_VOTE',
    type: 'FILM',
    page: 1,
    genres: '4',
    countries: '1',
  });

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
        title={t('carousels.foreign-series') || 'Зарубежные сериалы'}
        movies={foreignSeries?.items}
        route={'/movies'}
      />
      <Carousel
        title={t('carousels.adventures') || 'Приключения'}
        movies={adventures?.items}
        route={'/movies'}
      />
    </>
  );
};

export default Home;
