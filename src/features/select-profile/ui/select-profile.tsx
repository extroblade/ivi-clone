import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';

import { Title } from '@/newui';

import { ProfileIcon } from '../profile-icon';
import styles from './select-profile.module.scss';

export const SelectProfile = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const username = session?.user?.name || session?.user?.email || t('sections.profile');
  const photo = session?.user?.image || null;
  return (
    <div className={styles.profile}>
      <div className={styles.profile__title}>
        <Title tag="h3">{t('sections.select-profile')}</Title>
      </div>
      <div className={styles.profile__row}>
        <div className={styles.profile__user}>
          {session?.user && photo ? (
            <ProfileIcon image={photo} isActive={true} />
          ) : (
            <div className={`${styles.profile__image} ${styles.no_image}`}>
              <FiUser />
            </div>
          )}
          <span>{username}</span>
        </div>
        <ProfileIcon image={'/images/children.png'} name={t('sections.children')} />
        <ProfileIcon name={t('buttons.new-one')} isActive={false} />
      </div>
    </div>
  );
};
