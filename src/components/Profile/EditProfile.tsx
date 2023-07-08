import React from 'react';
import styles from '@/components/Profile/ProfilePage/ProfilePage.module.scss';
import { Htag } from '@/UI/Htag/Htag';
import { P } from '@/UI/P/P';
import Link from 'next/link';
import { Button } from '@/UI/Button/Button';
import { HiOutlinePencil } from 'react-icons/hi';
import { BsEnvelope, BsPhone } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';

const EditProfile = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const user = session?.user || null;

  const finalName = () => {
    const { name, nickname, surname } = user;
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
            <P size={'S'}>{user?.email}</P>
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

export default EditProfile;
