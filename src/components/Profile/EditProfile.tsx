import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsEnvelope, BsPhone } from 'react-icons/bs';
import { HiOutlinePencil } from 'react-icons/hi';

import styles from '@/components/Profile/ProfilePage/ProfilePage.module.scss';
import { Button, Htag, P } from '@/UI';

export const EditProfile = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const user: { name?: string; nickname?: string; surname?: string; email?: string } =
    session?.user || null;
  const { name, nickname, surname, email } = user || {};

  const finalName = () => {
    if (name) {
      return `${name} ${surname || ''}`;
    } else if (nickname) {
      return nickname;
    } else {
      return t('sections.profile');
    }
  };

  return (
    <div className={styles.userinfo}>
      <div className={styles.userinfo__title}>
        <div className={styles.title__text}>
          <Htag tag={'h2'}>{finalName()}</Htag>
          <P>{t('sections.main-profile')}</P>
        </div>
        <Link href={'/profile'}>
          <Button title={t('buttons.edit-profile') || 'Редактировать профиль'}>
            <HiOutlinePencil />
            {t('buttons.edit-profile')}
          </Button>
        </Link>
      </div>
      <div className={styles.userinfo__information}>
        <div className={styles.info}>
          <BsEnvelope />
          {user?.email ? (
            <P size={'S'}>{email}</P>
          ) : (
            <Button appearance={'transparent'} size={'S'} title={t('buttons.add-email') || ''}>
              {t('buttons.add-email')}
            </Button>
          )}
        </div>
        <div className={styles.info}>
          <BsPhone />
          <Button appearance={'transparent'} size={'S'} title={t('buttons.add-phone') || ''}>
            {t('buttons.add-phone')}
          </Button>
        </div>
      </div>
    </div>
  );
};
