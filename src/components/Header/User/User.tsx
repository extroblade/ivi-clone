import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BiCertification, BiMoviePlay } from 'react-icons/bi';
import { GoCreditCard } from 'react-icons/go';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { IoDiamondOutline, IoTimerOutline } from 'react-icons/io5';
import { TbDeviceTvOld } from 'react-icons/tb';

import { LinkCard, LoginButton } from '@/components';
import { ProfileSelector } from '@/UI';

import styles from './User.module.scss';

export const User: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const router = useRouter();
  const logoutFunc = () => {
    signOut().then(() => {
      router.push('/profile');
    });
  };

  return (
    <div className={styles.user__content}>
      <div className={styles.content__row}>
        <div className={styles.content__actions}>
          <LinkCard icon={BiMoviePlay} title={t('buttons.purchases')} link="/purchases" />
          <LinkCard icon={HiOutlineBookmark} title={t('buttons.watch-later')} link="/purchases" />
          <LinkCard icon={IoTimerOutline} title={t('buttons.views-story')} link="/purchases" />
          <LinkCard
            icon={IoDiamondOutline}
            title={t('buttons.subscriptions')}
            link="/purchases"
            subtitle={t('buttons.connect') || ''}
            status="red"
          />
          <LinkCard
            icon={BiCertification}
            title={t('buttons.activate-certificate')}
            link="/purchases"
          />
          <LinkCard icon={TbDeviceTvOld} title={t('buttons.code-login')} link="/purchases" />
          <LinkCard icon={GoCreditCard} title={t('buttons.payment')} link="/purchases" />
        </div>
        <div className={styles.content__auth}>
          {session?.user ? <ProfileSelector /> : <LoginButton />}
          <div className={styles.content__links}>
            {session?.user && (
              <Link href="https://www.ivi.tv/profile/profile_info">
                {t('buttons.edit-profile')}
              </Link>
            )}
            <Link href={'https://www.ivi.tv/profile/settings'}>{t('buttons.settings')}</Link>
            <Link href={'/admin'}>{t('buttons.support')}</Link>
            {session?.user && <span onClick={logoutFunc}>{t('buttons.logout')}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
