import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsBookmark } from 'react-icons/bs';

import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const WatchLaterButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/watched'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={BsBookmark}>
        {t('buttons.watch-later')}
      </ProfileButton>
    </Link>
  );
};
