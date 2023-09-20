import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BiUser } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '@/../public/images/iviLogo.svg';
import {
  Categories,
  LanguageSwitcher,
  Notifications,
  SearchButton,
  Submenu,
  User,
} from '@/components';
import { cartoonCategories, movieCategories, seriesCategories } from '@/mock';
import { Button } from '@/UI';

import styles from './Header.module.scss';

export const Header: FC = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const photo = session?.user?.image || null;
  return (
    <header className="header">
      <div className="container">
        <div className={styles.row}>
          <div className={styles.body}>
            <div className={styles.logo}>
              <Link href="/">
                <Image src={logo} alt="logo" width={66} height={48} />
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
                    <Categories
                      genres={movieCategories.genres}
                      countries={movieCategories.countries}
                      years={movieCategories.years}
                      collections={movieCategories.collections}
                    />
                  </Submenu>
                </li>
                <li className={styles.menu__item}>
                  <Submenu title={t('sections.series')} link="/series">
                    <Categories
                      genres={seriesCategories.genres}
                      countries={seriesCategories.countries}
                      years={seriesCategories.years}
                      collections={seriesCategories.collections}
                    />
                  </Submenu>
                </li>
                <li className={styles.menu__item}>
                  <Submenu title={t('sections.animation')} link="/animation">
                    <Categories
                      genres={cartoonCategories.genres}
                      countries={cartoonCategories.countries}
                      years={cartoonCategories.years}
                      collections={cartoonCategories.collections}
                    />
                  </Submenu>
                </li>
              </ul>
            </nav>
            <div className={styles.zindex}>
              <LanguageSwitcher />
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
            <Submenu icon={BiUser} user={photo} link={'/profile'} outline>
              <User />
            </Submenu>
          </div>
        </div>
      </div>
    </header>
  );
};
