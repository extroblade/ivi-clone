import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileButton } from '@/UI/Profile/ProfileButton/ProfileButton';
export const SubscriptionsButton = () => {
  const { t } = useTranslation();
  return (
    <Link href={'https://www.ivi.ru/profile/subscriptions'}>
      <ProfileButton type={'rect_text'}>
        <>
          <div>{t('buttons.subscriptions')}</div>
          <div>{t('buttons.subscribe')}</div>
        </>
      </ProfileButton>
    </Link>
  );
};
