import React from 'react';
import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '@/shared/hooks';
import { Breadcrumbs, Description, Text, Title } from '@/shared/ui';
import { Filters } from '@/widgets/filter';
import { MovieGrid } from '@/widgets/grid';

export const SeriesPage = () => {
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.series-page-title')}</Title>

      <Description>
        <Text>{t('descriptions.series-page-cut')}</Text>
        <Text>{t('descriptions.series-page-text1')}</Text>
        <Text>{t('descriptions.series-page-text2')}</Text>
        <Text>{t('descriptions.series-page-text3')}</Text>
        <Text>{t('descriptions.series-page-text4')}</Text>
      </Description>
      <Filters />
      <MovieGrid type={'TV_SERIES'} />
    </>
  );
};
