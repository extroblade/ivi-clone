import { signOut, useSession } from 'next-auth/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { LogoutButtonProps } from '@/features/logout-button/model/props';
import { Button } from '@/newui';

import styles from './logout-button.module.scss';

export const LogoutButton: FC<LogoutButtonProps> = ({ variant = 'left' }) => {
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
