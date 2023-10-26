import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiWallet } from 'react-icons/bi';

import { ProfileButton } from '@/features/buttons/profile/ui/profile-button';

export const PurchasesButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/favorites'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={BiWallet}>
        {t('buttons.purchases')}
      </ProfileButton>
    </Link>
  );
};
