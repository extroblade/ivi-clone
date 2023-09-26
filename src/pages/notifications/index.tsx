import Head from 'next/head';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { NoNotifications } from '@/entities/no-notifications';
import { BackButton } from '@/features/back-button';
import { Title } from '@/newui';

const Notifications: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.profile') || 'Мой профиль / ivi.ru'}</title>
      </Head>
      <BackButton />
      <Title tag="h2">{t('buttons.notifications-stocks')}</Title>

      <NoNotifications />
    </>
  );
};

export default Notifications;
