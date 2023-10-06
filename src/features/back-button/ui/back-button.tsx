import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronLeft } from 'react-icons/hi';

import { Button } from '@/newui';
import { useEscapeKey } from '@/shared/hooks';

import styles from './back-button.module.scss';

export const BackButton: FC<{ children?: string | null }> = ({ children }): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRedirectBack = () => {
    router.back ? router.back() : router.push('/');
  };

  useEscapeKey(handleRedirectBack);

  return (
    <Button appearance={'transparent'} className={styles.back} onClick={handleRedirectBack}>
      <HiChevronLeft className={styles.back__icon} />
      <span>{children || t('buttons.back')}</span>
    </Button>
  );
};
