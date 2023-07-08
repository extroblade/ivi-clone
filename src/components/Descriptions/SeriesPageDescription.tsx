import React from 'react';
import { Htag } from '@/UI/Htag/Htag';
import { P } from '@/UI/P/P';
import Description from '@/UI/Description/Description';
import { useTranslation } from 'react-i18next';

const SeriesPageDescription = () => {
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

export default SeriesPageDescription;
