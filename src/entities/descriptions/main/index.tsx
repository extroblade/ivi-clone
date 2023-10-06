import { useTranslation } from 'react-i18next';

import { Description, List, Text } from '@/newui';

export const MainDescription = () => {
  const { t } = useTranslation();
  return (
    <Description>
      <Text>{t('descriptions.main-page-cut')}</Text>
      <Text>{t('descriptions.main-page-text0')}</Text>
      <Text>{t('descriptions.main-page-text1')}</Text>
      <List>
        <Text>{t('descriptions.main-page-text2')}</Text>
        <Text>{t('descriptions.main-page-text3')}</Text>
        <Text>{t('descriptions.main-page-text4')}</Text>
        <Text>{t('descriptions.main-page-text5')}</Text>
        <Text>{t('descriptions.main-page-text6')}</Text>
        <Text>{t('descriptions.main-page-text7')}</Text>
        <Text>{t('descriptions.main-page-text8')}</Text>
        <Text>{t('descriptions.main-page-text9')}</Text>
      </List>
      <Text>{t('descriptions.main-page-text10')}</Text>
    </Description>
  );
};
