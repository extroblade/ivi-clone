import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbBellRinging } from 'react-icons/tb';

import { ProfileButton } from '@/UI/ProfileButton/ProfileButton';

export const NotificationsButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'/notifications'} target={'_blank'}>
      <ProfileButton type={'rect_icon'} icon={TbBellRinging}>
        {t('buttons.notifications')}
      </ProfileButton>
    </Link>
  );
};
