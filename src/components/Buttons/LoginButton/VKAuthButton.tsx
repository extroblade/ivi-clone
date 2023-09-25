import { signIn } from 'next-auth/react';
import { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { SlSocialVkontakte } from 'react-icons/sl';

import { Button } from '@/newui';

export const VkAuthButton = () => {
  const { t } = useTranslation();
  const handleAuth = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    await signIn('vk');
  };
  return (
    <Button appearance={'red'} onClick={(e) => handleAuth(e)}>
      <span>{t('buttons.login-with')} VK</span>
      <SlSocialVkontakte />
    </Button>
  );
};
