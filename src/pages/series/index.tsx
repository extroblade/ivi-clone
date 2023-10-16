import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { SeriesDescription } from '@/entities/descriptions';
import { Breadcrumbs, Title } from '@/newui';
import { useBreadcrumbs } from '@/shared/hooks';
import { Filters } from '@/widgets/filter/ui/filters';
import { MovieGrid } from '@/widgets/grid';

const Series = () => {
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Head>
        <title>{t('title.series') || 'Сериалы смотреть онлайн'}</title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.series-page-title')}</Title>

      <SeriesDescription />
      <Filters />
      <MovieGrid type={'TV_SERIES'} />
    </>
  );
};

export default Series;
