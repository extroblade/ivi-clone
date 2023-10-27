import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '@/shared/hooks';
import { Breadcrumbs, Description, Text, Title } from '@/shared/ui';
import { Filters } from '@/widgets/filter';
import { MovieGrid } from '@/widgets/grid';

export const AnimationPage = () => {
  const { t } = useTranslation();

  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.animation-page-title')}</Title>

      <Description>
        <Text>{t('descriptions.animation-page-cut')}</Text>
        <Text>{t('descriptions.animation-page-text1')}</Text>
        <Text>{t('descriptions.animation-page-text2')}</Text>
        <Text>{t('descriptions.animation-page-text3')}</Text>
        <Text>{t('descriptions.animation-page-text4')}</Text>
      </Description>
      <Filters />
      <MovieGrid type={'MINI_SERIES'} />
    </>
  );
};
