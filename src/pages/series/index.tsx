import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Filters, SeriesPageDescription } from '@/components';
import { Breadcrumbs, Grid } from '@/UI';

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
      <SeriesPageDescription />
      <Filters />
      <Grid type={'TV_SERIES'} />
    </>
  );
};

export default Series;
