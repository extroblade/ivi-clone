import React from 'react';
import BreadCrumbs from '@/UI/Breadcrumbs/Breadcrumbs';
import Head from 'next/head';
import SeriesPageDescription from '@/components/Descriptions/SeriesPageDescription';
import { useTranslation } from 'react-i18next';
import Filters from '@/UI/Filters/Filters';
import Grid from '@/UI/Grid/Grid';

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
      <BreadCrumbs breadcrumbs={breadcrumbs} />
      <SeriesPageDescription />
      <Filters />
      <Grid type={'TV_SERIES'} />
    </>
  );
};

export default Series;
