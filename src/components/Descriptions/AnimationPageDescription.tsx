import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text, Title } from '@/newui';
import { Description } from '@/newui/description/description';

export const AnimationPageDescription = () => {
  const { t } = useTranslation();
  return (
    <Description title={<Title tag={'h2'}>{t('descriptions.animation-page-title')}</Title>}>
      <>
        <Text size={'M'}>{t('descriptions.animation-page-cut')}</Text>
        <Text size={'M'}>{t('descriptions.animation-page-text1')}</Text>
        <Text size={'M'}>{t('descriptions.animation-page-text2')}</Text>
        <Text size={'M'}>{t('descriptions.animation-page-text3')}</Text>
        <Text size={'M'}>{t('descriptions.animation-page-text4')}</Text>
      </>
    </Description>
  );
};
