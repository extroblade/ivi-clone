import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { RxCountdownTimer } from 'react-icons/rx';

import { ProfileButton } from '@/features/buttons/profile/ui/profile-button';

export const ViewedButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/cards'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={RxCountdownTimer}>
        {t('buttons.views')}
      </ProfileButton>
    </Link>
  );
};
