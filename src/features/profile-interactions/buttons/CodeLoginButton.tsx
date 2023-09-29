import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlinePlaySquare } from 'react-icons/ai';

import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const CodeLoginButton = () => {
  const { t } = useTranslation();

  return (
    <ProfileButton type={'square_icon'} icon={AiOutlinePlaySquare}>
      {t('buttons.code-login')}
    </ProfileButton>
  );
};
