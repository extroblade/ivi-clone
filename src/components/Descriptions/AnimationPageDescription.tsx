import React from 'react';
import { Htag } from '@/UI/Htag/Htag';
import { P } from '@/UI/P/P';
import Description from '@/UI/Description/Description';
import { useTranslation } from 'react-i18next';

const AnimationPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description
      title={<Htag tag={'h2'}>{t('descriptions.animation-page-title')}</Htag>}
      cut={<P size={'M'}>{t('descriptions.animation-page-cut')}</P>}
    >
      <>
        <P size={'M'}>{t('descriptions.animation-page-text1')}</P>
        <P size={'M'}>{t('descriptions.animation-page-text2')}</P>
        <P size={'M'}>{t('descriptions.animation-page-text3')}</P>
        <P size={'M'}>{t('descriptions.animation-page-text4')}</P>
      </>
    </Description>
  );
};

export default AnimationPageDescription;
