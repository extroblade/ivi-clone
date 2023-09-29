import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GiPresent } from 'react-icons/gi';

import { ProfileButtonProps } from '@/features/profile-interactions/model/props';
import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const PresentSubscriptionButton: FC<ProfileButtonProps> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <Link href={'https://widget.mgc-loyalty.ru/iviru/landing'} target={'_blank'}>
      <ProfileButton type={type} icon={GiPresent}>
        {t('buttons.present-subscription')}
      </ProfileButton>
    </Link>
  );
};
