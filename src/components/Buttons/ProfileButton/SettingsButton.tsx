import React from 'react';
import ProfileButton from '@/UI/ProfileButton/ProfileButton';
import { FiSettings } from 'react-icons/fi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const SettingsButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/settings'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={FiSettings}>
        {t('buttons.settings')}
      </ProfileButton>
    </Link>
  );
};

export default SettingsButton;
