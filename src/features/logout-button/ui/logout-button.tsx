import { signOut } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { Button } from '@/newui';

export const LogoutButton = () => {
  const { t } = useTranslation();

  return (
    <Button
      appearance={'transparent'}
      onClick={() => signOut()}
      title={t('buttons.logout') || 'Выйти'}
    >
      <RiLogoutBoxRLine />
      {t('buttons.logout')}
    </Button>
  );
};
