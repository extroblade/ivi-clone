import React from 'react';
import ProfileButton from '@/UI/ProfileButton/ProfileButton';
import { BiSupport } from 'react-icons/bi';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const SupportButton = () => {
  const { t } = useTranslation();

  return (
    <Link href={'https://ask.ivi.ru/'} target={'_blank'}>
      <ProfileButton type={'square_icon'} icon={BiSupport}>
        {t('buttons.support')}
      </ProfileButton>
    </Link>
  );
};

export default SupportButton;
