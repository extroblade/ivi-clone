import React from 'react';
import ProfileButton from '@/components/Profile/ProfileButton/ProfileButton';
import { BsBookmark } from 'react-icons/bs';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const WatchLaterButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/profile/watched'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={BsBookmark}>
        {t('buttons.watch-later')}
      </ProfileButton>
    </Link>
  );
};

export default WatchLaterButton;
