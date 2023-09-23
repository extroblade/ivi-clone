import { useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';

import { Htag, ProfileIcon } from '@/UI';

import styles from './ProfileSelector.module.scss';

export const ProfileSelector = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const username = session?.user?.name || session?.user?.email || t('sections.profile');
  const photo = session?.user?.image || null;
  return (
    <div className={styles.profile}>
      <div className={styles.profile__title}>
        <Htag tag="h3">{t('sections.select-profile')}</Htag>
      </div>
      <div className={styles.profile__row}>
        <div className={styles.profile__user}>
          {session?.user && photo ? (
            <ProfileIcon image={photo} name={''} isActive={true} />
          ) : (
            <div className={`${styles.profile__image} ${styles.no_image}`}>
              <FiUser />
            </div>
          )}
          <span>{username}</span>
        </div>
        <ProfileIcon
          image={'/images/children.png'}
          name={t('sections.children')}
          isActive={false}
        />
        <ProfileIcon name={t('buttons.new-one')} isActive={false} />
      </div>
    </div>
  );
};
