import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiSettings } from 'react-icons/fi';

import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const SettingsButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/settings'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={FiSettings}>
        {t('buttons.settings')}
      </ProfileButton>
    </Link>
  );
};
