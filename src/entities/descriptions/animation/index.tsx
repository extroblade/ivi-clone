import { useTranslation } from 'react-i18next';

import { Description, Text } from '@/newui';

export const AnimationDescription = () => {
  const { t } = useTranslation();
  return (
    <Description>
      <Text size={'M'}>{t('descriptions.animation-page-cut')}</Text>
      <Text size={'M'}>{t('descriptions.animation-page-text1')}</Text>
      <Text size={'M'}>{t('descriptions.animation-page-text2')}</Text>
      <Text size={'M'}>{t('descriptions.animation-page-text3')}</Text>
      <Text size={'M'}>{t('descriptions.animation-page-text4')}</Text>
    </Description>
  );
};
