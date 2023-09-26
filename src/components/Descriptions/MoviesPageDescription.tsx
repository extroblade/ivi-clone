import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text, Title } from '@/newui';
import { Description } from '@/newui/description/description';

export const MoviesPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description title={<Title tag={'h2'}>{t('descriptions.movies-page-title')}</Title>}>
      <>
        <Text size={'M'}>
          {t('descriptions.movies-page-cut-1')}
          <Link href={'/'}> {t('descriptions.movies-page-cut-2')} </Link>
          {t('descriptions.movies-page-cut-3')}
        </Text>
        <Text size={'M'}>{t('descriptions.movies-page-text-1')}</Text>
        <Text size={'M'}>{t('descriptions.movies-page-text-2')}</Text>
        <Text size={'M'}>{t('descriptions.movies-page-text-3')}</Text>
        <Text size={'M'}>{t('descriptions.movies-page-text-4')}</Text>
      </>
    </Description>
  );
};
