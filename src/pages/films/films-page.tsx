import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { useBreadcrumbs } from '@/shared/hooks';
import { Breadcrumbs, Description, Text, Title } from '@/shared/ui';
import { Filters } from '@/widgets/filter';
import { MovieGrid } from '@/widgets/grid';

export const FilmsPage = () => {
  const { t } = useTranslation();
  const breadcrumbs = useBreadcrumbs();
  return (
    <>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Title tag={'h2'}>{t('descriptions.movies-page-title')}</Title>

      <Description>
        <Text>
          {t('descriptions.movies-page-cut-1')}
          <Link href={'/movies?genre=11'}> {t('descriptions.movies-page-cut-2')} </Link>
          {t('descriptions.movies-page-cut-3')}
        </Text>
        <Text>{t('descriptions.movies-page-text-1')}</Text>
        <Text>{t('descriptions.movies-page-text-2')}</Text>
        <Text>{t('descriptions.movies-page-text-3')}</Text>
        <Text>{t('descriptions.movies-page-text-4')}</Text>
      </Description>
      <Filters />
      <MovieGrid type={'FILM'} />
    </>
  );
};
