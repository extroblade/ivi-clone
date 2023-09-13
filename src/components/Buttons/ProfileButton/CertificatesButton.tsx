import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import ProfileButton from '@/UI/Profile/ProfileButton/ProfileButton';
import { iPB } from '@/UI/Profile/ProfileButton/ProfileButtons.props';

export const CertificatesButton: FC<iPB> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <ProfileButton type={type}>
      <>
        <div>{t('buttons.certificates')}</div>
        <div>{t('buttons.activate')}</div>
      </>
    </ProfileButton>
  );
};
