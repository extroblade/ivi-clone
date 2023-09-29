import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileButtonProps } from '@/features/profile-interactions/model/props';
import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const CertificatesButton: FC<ProfileButtonProps> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <ProfileButton type={type}>
      <div>{t('buttons.certificates')}</div>
      <div>{t('buttons.activate')}</div>
    </ProfileButton>
  );
};
