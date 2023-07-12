import React from 'react';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import ProfileButton from '@/UI/ProfileButton/ProfileButton';
import { useTranslation } from 'react-i18next';

const CodeLoginButton = () => {
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

export default CodeLoginButton;
