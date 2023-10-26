import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { GiPresent } from 'react-icons/gi';

import { ProfileButton } from '@/features/buttons/profile/ui/profile-button';
import { ProfileButtonProps } from '@/features/profile-interactions/model/props';

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
