import React from 'react';
import { useTranslation } from 'react-i18next';

import { Description, Htag, P } from '@/UI';

export const SeriesPageDescription = () => {
  const { t } = useTranslation();
  const size = 'M';
  return (
    <Description
      title={<Htag tag={'h2'}>{t('descriptions.series-page-title')}</Htag>}
      cut={<P size={size}>{t('descriptions.series-page-cut')}</P>}
    >
      <>
        <P size={size}>{t('descriptions.series-page-text1')}</P>
        <P size={size}>{t('descriptions.series-page-text2')}</P>
        <P size={size}>{t('descriptions.series-page-text3')}</P>
        <P size={size}>{t('descriptions.series-page-text4')}</P>
      </>
    </Description>
  );
};
