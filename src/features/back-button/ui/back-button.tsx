import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronLeft } from 'react-icons/hi';

import { Button } from '@/newui';
import { useEscapeKey } from '@/shared/hooks';

import styles from './back-button.module.scss';

export const BackButton: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();

  const back = () => {
    router.back();
  };

  useEscapeKey(back);

  return (
    <Button appearance={'transparent'} className={styles.back} onClick={back}>
      <HiChevronLeft className={styles.back__icon} />
      <span>{t('buttons.back')}</span>
    </Button>
  );
};
