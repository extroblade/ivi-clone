import { useTranslation } from 'react-i18next';

import { ProfileButton } from '@/features/buttons/profile/ui/profile-button';

export const BalanceButton = () => {
  const { t } = useTranslation();
  return (
    <ProfileButton type={'rect_text'}>
      <div>{t('buttons.balance')}</div>
      <div>0 &#8381;</div>
    </ProfileButton>
  );
};
