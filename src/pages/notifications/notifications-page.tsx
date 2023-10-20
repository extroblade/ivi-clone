import { useTranslation } from 'react-i18next';

import { NoNotifications } from '@/entities/no-notifications';
import { BackButton } from '@/features/back-button';
import { Title } from '@/shared/ui';

export const NotificationsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <BackButton />
      <Title tag="h2">{t('buttons.notifications-stocks')}</Title>

      <NoNotifications />
    </>
  );
};
