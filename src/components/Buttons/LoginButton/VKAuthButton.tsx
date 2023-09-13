import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SlSocialVkontakte } from 'react-icons/sl';

import { Button } from '@/UI';

export const VkAuthButton = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';
  async function handleVkSingIn() {
    await signIn('vk', { callbackUrl });
  }

  return (
    <Button appearance={'red'} onClick={handleVkSingIn}>
      <span>{t('buttons.login-with')} VK</span>
      <SlSocialVkontakte />
    </Button>
  );
};
