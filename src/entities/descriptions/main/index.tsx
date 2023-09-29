import { useTranslation } from 'react-i18next';

import { Description, Text } from '@/newui';

import styles from './index.module.scss';

export const MainDescription = () => {
  const { t } = useTranslation();
  return (
    <Description>
      <Text>{t('descriptions.main-page-cut')}</Text>
      <Text>{t('descriptions.main-page-text0')}</Text>
      <Text>{t('descriptions.main-page-text1')}</Text>
      <ol className={styles.list}>
        <li className={styles.li}>
          <Text>{t('descriptions.main-page-text2')}</Text>
        </li>
        <li className={styles.li}>
          <Text>{t('descriptions.main-page-text3')}</Text>
        </li>
        <li className={styles.li}>
          <Text>{t('descriptions.main-page-text4')}</Text>
        </li>
        <li className={styles.li}>
          <Text>{t('descriptions.main-page-text5')}</Text>
        </li>
        <li className={styles.li}>
          <Text>{t('descriptions.main-page-text6')}</Text>
        </li>
        <li className={styles.li}>
          <Text>{t('descriptions.main-page-text7')}</Text>
        </li>
        <li className={styles.li}>
          <Text>{t('descriptions.main-page-text8')}</Text>
        </li>
        <li className={styles.li}>
          <Text>{t('descriptions.main-page-text9')}</Text>
        </li>
      </ol>
      <Text>{t('descriptions.main-page-text10')}</Text>
    </Description>
  );
};
