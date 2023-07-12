import React, { FC } from 'react';
import ProfileButton from '@/UI/ProfileButton/ProfileButton';
import { useTranslation } from 'react-i18next';
import { iPB } from '@/UI/ProfileButton/ProfileButtons.props';

const CertificatesButton: FC<iPB> = ({ type }) => {
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

export default CertificatesButton;
