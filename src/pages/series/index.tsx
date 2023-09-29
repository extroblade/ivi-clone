import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Filters } from '@/components';
import { SeriesDescription } from '@/entities/descriptions';
import { Breadcrumbs, Title } from '@/newui';
import { Grid } from '@/widgets/grid';

const Series = () => {
  const { t } = useTranslation();
  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.series'), path: '/series' },
  ];
  return (
    <>
      <Head>
        <title>{t('title.series') || 'Сериалы смотреть онлайн'}</title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.series-page-title')}</Title>

      <SeriesDescription />
      <Filters />
      <Grid type={'TV_SERIES'} />
    </>
  );
};

export default Series;
