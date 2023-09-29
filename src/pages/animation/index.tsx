import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { AnimationDescription } from '@/entities/descriptions';
import { Breadcrumbs, Title } from '@/newui';
import { Filters } from '@/widgets/filter/ui/Filters';
import { Grid } from '@/widgets/grid';

const Animation = () => {
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
      <Title tag={'h2'}>{t('descriptions.animation-page-title')}</Title>

      <AnimationDescription />
      <Filters />
      <Grid type={'MINI_SERIES'} />
    </>
  );
};

export default Animation;
