import cn from 'classnames';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LogoutButton } from '@/features/logout-button';
import { SelectProfile } from '@/features/select-profile';
import { Text, Title } from '@/shared/ui';
import { AuthButton } from '@/widgets/auth';
import { guestList, userList } from '@/widgets/profile/model/lists';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const [uuid, setUuid] = useState('');
  useEffect(() => {
    const id = localStorage?.getItem('uuid');
    if (!id) {
      return;
    }

    setUuid(() => localStorage?.getItem('uuid') || '2131212312');
  }, []);

  return (
    <div className={styles.profile__btns}>
      {session?.user ? (
        <div className={styles.select_profile}>
          <div className={styles.select_container}>
            <Title tag="h2">{t('sections.select-profile')}</Title>

            <SelectProfile />
          </div>
        </div>
      ) : (
        <div className={styles.login_button}>
          <AuthButton />
        </div>
      )}
      {(session?.user ? userList : guestList).map((list, outer) => (
        <ul key={outer} className={styles.list}>
          {list.map(({ component, className }, index) => (
            <li key={index} className={cn(styles.list__item, styles?.[className])}>
              {component}
            </li>
          ))}
        </ul>
      ))}

      <div className={styles.bottom}>
        <LogoutButton />
        <div className={styles.id}>
          <Text>uid: {uuid}</Text>
        </div>
      </div>
    </div>
  );
};
