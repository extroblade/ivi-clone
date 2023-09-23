import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsReceipt } from 'react-icons/bs';

import { ProfileButton } from '@/UI/Profile/ProfileButton/ProfileButton';

export const ChecksButton = () => {
  const { t } = useTranslation();
  return (
    <Link href={'/profile'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={BsReceipt}>
        {t('buttons.checks')}
      </ProfileButton>
    </Link>
  );
};
