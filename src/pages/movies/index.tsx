import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { Filters } from '@/components';
import { MoviesDescription } from '@/entities/descriptions';
import { Breadcrumbs, Title } from '@/newui';
import { Grid } from '@/widgets/grid';

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
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.movies-page-title')}</Title>

      <MoviesDescription />
      <Filters />
      <Grid type={'FILM'} />
    </>
  );
};

export default Movies;
