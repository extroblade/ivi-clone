import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillCreditCard } from 'react-icons/ai';

import ProfileButton from '@/UI/Profile/ProfileButton/ProfileButton';

export const PaymentButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/purchases'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={AiFillCreditCard}>
        {t('buttons.payment')}
      </ProfileButton>
    </Link>
  );
};
