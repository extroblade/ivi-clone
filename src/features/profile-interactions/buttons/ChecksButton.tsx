import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsReceipt } from 'react-icons/bs';

import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const ChecksButton = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  if (!session) return <></>;
  return (
    <Link href={'/profile'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={BsReceipt}>
        {t('buttons.checks')}
      </ProfileButton>
    </Link>
  );
};
