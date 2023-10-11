import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

import { Title } from '@/newui';

import { ProfileIcon } from '../profile-icon';
import styles from './select-profile.module.scss';

export const SelectProfile = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  return (
    <div className={styles.profile}>
      <Title className={styles.title} tag="h3">
        {t('sections.select-profile')}
      </Title>
      <div className={styles.profile__row}>
        <div className={styles.profile__user}>
          <ProfileIcon
            image={
              session?.user?.image && (
                <Image
                  className={styles.img}
                  src={session.user.image}
                  alt="user"
                  width={48}
                  height={48}
                />
              )
            }
            isActive={true}
            name={session?.user?.name || session?.user?.email || t('sections.profile') || 'Имя'}
          />
        </div>
        <ProfileIcon
          image={
            <Image
              className={styles.img}
              src={'/images/children.png'}
              alt="user"
              width={48}
              height={48}
            />
          }
          name={t('sections.children') || ''}
        />
        <ProfileIcon
          image={<span className={styles.profile__add} />}
          name={t('buttons.new-one') || ''}
          isActive={false}
        />
      </div>
    </div>
  );
};
