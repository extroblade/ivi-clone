import { useTranslation } from 'react-i18next';

import { MoviesDescription } from '@/entities/descriptions';
import { useBreadcrumbs } from '@/shared/hooks';
import { Breadcrumbs, Title } from '@/shared/ui';
import { Filters } from '@/widgets/filter';
import { MovieGrid } from '@/widgets/grid';

export const Films = () => {
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.movies-page-title')}</Title>

      <MoviesDescription />
      <Filters />
      <MovieGrid type={'FILM'} />
    </>
  );
};
