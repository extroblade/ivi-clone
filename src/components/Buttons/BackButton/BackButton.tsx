import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronLeft } from 'react-icons/hi';

import { useEscapeKey } from '@/hooks';

import styles from './BackButton.module.scss';

export const BackButton: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();

  const back = () => {
    router.back();
  };

  useEscapeKey(back);

  return (
    <button className={styles.back} onClick={back}>
      <HiChevronLeft className={styles.back__icon} />
      <span>{t('buttons.back')}</span>
    </button>
  );
};
