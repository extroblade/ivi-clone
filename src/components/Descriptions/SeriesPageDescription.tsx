import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text, Title } from '@/newui';
import { Description } from '@/newui/description/description';

export const SeriesPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description title={<Title tag={'h2'}>{t('descriptions.series-page-title')}</Title>}>
      <>
        <Text size={'M'}>{t('descriptions.series-page-cut')}</Text>
        <Text size={'M'}>{t('descriptions.series-page-text1')}</Text>
        <Text size={'M'}>{t('descriptions.series-page-text2')}</Text>
        <Text size={'M'}>{t('descriptions.series-page-text3')}</Text>
        <Text size={'M'}>{t('descriptions.series-page-text4')}</Text>
      </>
    </Description>
  );
};
