import React, { FC } from 'react';
import { iPB } from '@/UI/ProfileButton/ProfileButtons.props';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import ProfileButton from '@/UI/ProfileButton/ProfileButton';
import { GiPresent } from 'react-icons/gi';

const ActivateCertificateButton: FC<iPB> = ({ type }) => {
  const { t } = useTranslation();

  return (
    <Link href={'https://www.ivi.ru/subscribe?redirect_url=%2F'}>
      <ProfileButton type={type} icon={GiPresent}>
        {t('buttons.activate-certificate')}
      </ProfileButton>
    </Link>
  );
};

export default ActivateCertificateButton;
