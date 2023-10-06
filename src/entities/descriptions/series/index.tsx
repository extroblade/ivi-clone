import { useTranslation } from 'react-i18next';

import { Description, Text } from '@/newui';

export const SeriesDescription = () => {
  const { t } = useTranslation();
  return (
    <Description>
      <Text>{t('descriptions.series-page-cut')}</Text>
      <Text>{t('descriptions.series-page-text1')}</Text>
      <Text>{t('descriptions.series-page-text2')}</Text>
      <Text>{t('descriptions.series-page-text3')}</Text>
      <Text>{t('descriptions.series-page-text4')}</Text>
    </Description>
  );
};
