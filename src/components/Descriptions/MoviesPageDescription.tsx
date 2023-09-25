import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/newui';
import { Description, Htag } from '@/UI';

export const MoviesPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description
      title={<Htag tag={'h2'}>{t('descriptions.movies-page-title')}</Htag>}
      cut={
        <Text size={'M'}>
          {t('descriptions.movies-page-cut-1')}
          <Link href={'/'}> {t('descriptions.movies-page-cut-2')} </Link>
          {t('descriptions.movies-page-cut-3')}
        </Text>
      }
    >
      <>
        <Text size={'M'}>{t('descriptions.movies-page-text-1')}</Text>
        <Text size={'M'}>{t('descriptions.movies-page-text-2')}</Text>
        <Text size={'M'}>{t('descriptions.movies-page-text-3')}</Text>
        <Text size={'M'}>{t('descriptions.movies-page-text-4')}</Text>
      </>
    </Description>
  );
};
