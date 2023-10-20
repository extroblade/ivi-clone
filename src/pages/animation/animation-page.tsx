import { useTranslation } from 'react-i18next';

import { AnimationDescription } from '@/entities/descriptions';
import { useBreadcrumbs } from '@/shared/hooks';
import { Breadcrumbs, Title } from '@/shared/ui';
import { Filters } from '@/widgets/filter';
import { MovieGrid } from '@/widgets/grid';

export const AnimationPage = () => {
  const { t } = useTranslation();

  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.animation-page-title')}</Title>

      <AnimationDescription />
      <Filters />
      <MovieGrid type={'MINI_SERIES'} />
    </>
  );
};
