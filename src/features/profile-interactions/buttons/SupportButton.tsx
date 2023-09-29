import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BiSupport } from 'react-icons/bi';

import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const SupportButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://ask.ivi.ru/'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={BiSupport}>
        {t('buttons.support')}
      </ProfileButton>
    </Link>
  );
};
