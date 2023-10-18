import { useTranslation } from 'react-i18next';

import { Description, Text } from '@/shared/ui';

export const AnimationDescription = () => {
  const { t } = useTranslation();
  return (
    <Description>
      <Text>{t('descriptions.animation-page-cut')}</Text>
      <Text>{t('descriptions.animation-page-text1')}</Text>
      <Text>{t('descriptions.animation-page-text2')}</Text>
      <Text>{t('descriptions.animation-page-text3')}</Text>
      <Text>{t('descriptions.animation-page-text4')}</Text>
    </Description>
  );
};
