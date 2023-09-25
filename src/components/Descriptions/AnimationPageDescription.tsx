import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '@/newui';
import { Description, Htag } from '@/UI';
export const AnimationPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description
      title={<Htag tag={'h2'}>{t('descriptions.animation-page-title')}</Htag>}
      cut={<Text size={'M'}>{t('descriptions.animation-page-cut')}</Text>}
    >
      <>
        <Text size={'M'}>{t('descriptions.animation-page-text1')}</Text>
        <Text size={'M'}>{t('descriptions.animation-page-text2')}</Text>
        <Text size={'M'}>{t('descriptions.animation-page-text3')}</Text>
        <Text size={'M'}>{t('descriptions.animation-page-text4')}</Text>
      </>
    </Description>
  );
};
