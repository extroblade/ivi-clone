import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { BiWallet } from 'react-icons/bi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const PurchasesButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/favorites'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={BiWallet}>
        {t('buttons.purchases')}
      </ProfileButton>
    </Link>
  );
};

export default PurchasesButton;
