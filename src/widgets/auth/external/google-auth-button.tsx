import { signIn } from 'next-auth/react';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { SlSocialGoogle } from 'react-icons/sl';

import { Button } from '@/shared/ui';

export const GoogleAuthButton = () => {
  const { t } = useTranslation();
  const handleAuth = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await signIn('google');
  };
  return (
    <Button appearance={'red'} onClick={(e) => handleAuth(e)}>
      <span>{t('buttons.login-with')} Google</span>
      <SlSocialGoogle />
    </Button>
  );
};
