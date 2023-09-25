import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/newui';
import { Description, Htag } from '@/UI';

export const SeriesPageDescription = () => {
  const { t } = useTranslation();
  const size = 'M';
  return (
    <Description
      title={<Htag tag={'h2'}>{t('descriptions.series-page-title')}</Htag>}
      cut={<Text size={size}>{t('descriptions.series-page-cut')}</Text>}
    >
      <>
        <Text size={size}>{t('descriptions.series-page-text1')}</Text>
        <Text size={size}>{t('descriptions.series-page-text2')}</Text>
        <Text size={size}>{t('descriptions.series-page-text3')}</Text>
        <Text size={size}>{t('descriptions.series-page-text4')}</Text>
      </>
    </Description>
  );
};
