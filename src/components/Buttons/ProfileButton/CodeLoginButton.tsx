import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlinePlaySquare } from 'react-icons/ai';

import { ProfileButton } from '@/UI/ProfileButton/ProfileButton';

export const CodeLoginButton = () => {
  const { t } = useTranslation();

  return (
    <ProfileButton
      type={'square_icon'}
      icon={AiOutlinePlaySquare}
      onClick={() => console.log('modal open')}
    >
      {t('buttons.code-login')}
    </ProfileButton>
  );
};
