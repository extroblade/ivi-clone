import React from 'react';
import { SlSocialGoogle } from 'react-icons/sl';
import { signIn } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/UI/Button/Button';

const GoogleAuthButton = () => {
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

export default GoogleAuthButton;
