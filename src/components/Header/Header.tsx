import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BiUser } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';

import { Categories, Notifications, Submenu, User } from '@/components';
import { SearchButton } from '@/entities/SearchButton/SearchButton';
import { SwitchLanguage } from '@/features/switch-language';
import { Button } from '@/newui';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  return (
    <header className="header">
      <div className="container">
        <div className={styles.row}>
          <div className={styles.body}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={'/images/iviLogo.svg'} alt="logo" width={66} height={48} />
              </Link>
            </div>
            <nav className={styles.menu}>
              <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                  <Link href="/" className={styles.menu__link}>
                    {t('sections.my-ivi')}
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Link href="https://www.ivi.tv/new" className={styles.menu__link}>
                    {t('sections.whats-new')}
                  </Link>
                </li>
                <li className={styles.menu__item}>
                  <Submenu title={t('sections.movies')} link="/movies">
                    <Categories />
                  </Submenu>
                </li>
                <li className={styles.menu__item}>
                  <Submenu title={t('sections.series')} link="/series">
                    <Categories />
                  </Submenu>
                </li>
                <li className={styles.menu__item}>
                  <Submenu title={t('sections.animation')} link="/animation">
                    <Categories />
                  </Submenu>
                </li>
              </ul>
            </nav>
            <div className={styles.zindex}>
              <SwitchLanguage />
            </div>

            <div className={styles.zindex}>
              <div className={styles.watch_free}>
                <Button size={'S'} appearance={'red'}>
                  {t('header.watch-free')}
                </Button>
              </div>
            </div>
            <div className={styles.zindex}>
              <SearchButton />
            </div>
          </div>
          <div className={styles.actions}>
            <Submenu icon={MdNotificationsNone} link={'/notifications'}>
              <Notifications />
            </Submenu>
            <Submenu icon={BiUser} user={session?.user?.image} link={'/profile'} outline>
              <User />
            </Submenu>
          </div>
        </div>
      </div>
    </header>
  );
};
