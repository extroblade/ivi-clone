import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileButton } from '@/features/buttons/profile/ui/profile-button';
import { ProfileButtonProps } from '@/features/profile-interactions/model/props';

export const CertificatesButton: FC<ProfileButtonProps> = ({ type }) => {
  const { t } = useTranslation();
  return (
    <ProfileButton type={type}>
      <div style={{ textAlign: 'start' }}>{t('buttons.certificates')}</div>
      <div>{t('buttons.activate')}</div>
    </ProfileButton>
  );
};
