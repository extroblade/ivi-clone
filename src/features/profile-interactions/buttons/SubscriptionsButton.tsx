import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { ProfileButton } from '@/features/profile-interactions/ui/profile-button';

export const SubscriptionsButton = () => {
  const { t } = useTranslation();
  return (
    <Link href={'https://www.ivi.ru/profile/subscriptions'}>
      <ProfileButton type={'rect_text'}>
        <div>{t('buttons.subscriptions')}</div>
        <div>{t('buttons.subscribe')}</div>
      </ProfileButton>
    </Link>
  );
};
