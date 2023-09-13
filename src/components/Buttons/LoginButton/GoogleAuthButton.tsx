import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SlSocialGoogle } from 'react-icons/sl';

import { Button } from '@/UI';

export const GoogleAuthButton = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  async function handleGoogleSingIn() {
    await signIn('google', { callbackUrl });
  }
  return (
    <Button appearance={'red'} onClick={handleGoogleSingIn}>
      <span>{t('buttons.login-with')} Google</span>
      <SlSocialGoogle />
    </Button>
  );
};
