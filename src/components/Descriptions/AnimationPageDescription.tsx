import React from 'react';
import { useTranslation } from 'react-i18next';

import { Description, Htag, P } from '@/UI';

export const AnimationPageDescription = () => {
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
