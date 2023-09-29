import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GiPresent } from 'react-icons/gi';

import { ProfileButtonProps } from '@/features/profile-interactions/model/props';
import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const ActivateCertificateButton: FC<ProfileButtonProps> = ({ type }) => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/subscribe?redirect_url=%2F'}>
      <ProfileButton type={type} icon={GiPresent}>
        {t('buttons.activate-certificate')}
      </ProfileButton>
    </Link>
  );
};
