import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BsLightningChargeFill } from 'react-icons/bs';

import { ProfileButton } from '@/features/buttons/profile/ui/profile-button';
import { ProfileButtonProps } from '@/features/profile-interactions/model/props';

export const PromotionButton: FC<ProfileButtonProps> = ({ type }) => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/subscribe?redirect_url=%2F'}>
      <ProfileButton type={type} icon={BsLightningChargeFill}>
        {t('buttons.promotion-30-days')} &#8381;
      </ProfileButton>
    </Link>
  );
};
