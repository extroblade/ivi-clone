import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { AnimationPageDescription, Filters } from '@/components';
import { Breadcrumbs, Grid } from '@/UI';

const Index = () => {
  const { t } = useTranslation();

  const breadcrumbs = [
    { name: t('sections.my-ivi'), path: '/' },
    { name: t('sections.animation'), path: '/series' },
  ];
  return (
    <>
      <Head>
        <title>{t('title.animation') || 'Мультфильмы смотреть онлайн'}</title>
      </Head>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <AnimationPageDescription />
      <Filters />
      <Grid type={'MINI_SERIES'} />
    </>
  );
};

export default Index;
