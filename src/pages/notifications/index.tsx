import Head from 'next/head';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { EmptyNotifications } from '@/UI';

const Notifications: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.profile') || 'Мой профиль / ivi.ru'}</title>
      </Head>
      <EmptyNotifications />
    </>
  );
};

export default Notifications;
