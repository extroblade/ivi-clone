import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GiPresent } from 'react-icons/gi';

import { ProfileButton } from '@/UI/Profile/ProfileButton/ProfileButton';
import { iPB } from '@/UI/Profile/ProfileButton/ProfileButtons.props';

export const ActivateCertificateButton: FC<iPB> = ({ type }) => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/subscribe?redirect_url=%2F'}>
      <ProfileButton type={type} icon={GiPresent}>
        {t('buttons.activate-certificate')}
      </ProfileButton>
    </Link>
  );
};
