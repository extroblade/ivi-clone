import React from 'react';
import ProfileButton from '@/UI/ProfileButton/ProfileButton';
import { AiFillCreditCard } from 'react-icons/ai';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const PaymentButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/purchases'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={AiFillCreditCard}>
        {t('buttons.payment')}
      </ProfileButton>
    </Link>
  );
};

export default PaymentButton;
