import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { ProfilePage } from '@/widgets/profile/ui/ProfilePage';

const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('title.profile') || 'Мой профиль / ivi.ru'}</title>
      </Head>
      <ProfilePage />
    </>
  );
};

export default Profile;
