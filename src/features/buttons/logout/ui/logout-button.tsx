import { signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { Button } from '@/shared/ui';

import styles from './logout-button.module.scss';

export const LogoutButton = ({ variant = 'left' }: { variant?: 'left' | 'right' | 'none' }) => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  if (!session) return <></>;
  return (
    <Button
      className={styles[variant]}
      appearance={'transparent'}
      onClick={() => signOut()}
      title={t('buttons.logout') || 'Выйти'}
    >
      {variant === 'left' && <RiLogoutBoxRLine />}
      {t('buttons.logout')}
      {variant === 'right' && <RiLogoutBoxRLine />}
    </Button>
  );
};
