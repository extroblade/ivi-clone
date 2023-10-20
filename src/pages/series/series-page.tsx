import React from 'react';
import { useTranslation } from 'react-i18next';

import { SeriesDescription } from '@/entities/descriptions';
import { useBreadcrumbs } from '@/shared/hooks';
import { Breadcrumbs, Title } from '@/shared/ui';
import { Filters } from '@/widgets/filter';
import { MovieGrid } from '@/widgets/grid';

export const SeriesPage = () => {
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.series-page-title')}</Title>

      <SeriesDescription />
      <Filters />
      <MovieGrid type={'TV_SERIES'} />
    </>
  );
};
