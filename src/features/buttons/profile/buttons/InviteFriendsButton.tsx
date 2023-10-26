import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { TbVectorTriangle } from 'react-icons/tb';

import { ProfileButton } from '@/features/buttons/profile/ui/profile-button';

export const InviteFriendsButton = () => {
  const { t } = useTranslation();
  return (
    <Link href={'https://www.ivi.ru/profile/referral'} target={'_blank'}>
      <ProfileButton type={'rect_icon'} icon={TbVectorTriangle}>
        {t('buttons.invite-friends')}
      </ProfileButton>
    </Link>
  );
};
