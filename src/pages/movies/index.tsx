import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { MoviesDescription } from '@/entities/descriptions';
import { useBreadcrumbs } from '@/shared/hooks';
import { Breadcrumbs, Title } from '@/shared/ui';
import { Filters } from '@/widgets/filter';
import { MovieGrid } from '@/widgets/grid';

const Movies = () => {
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Head>
        <title>{t('title.movies')}</title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.movies-page-title')}</Title>

      <MoviesDescription />
      <Filters />
      <MovieGrid type={'FILM'} />
    </>
  );
};

export default Movies;
