import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BiUser } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';

import { NoNotifications } from '@/entities/no-notifications';
import { SearchButton } from '@/features/search-button';
import { SwitchLanguage } from '@/features/switch-language';
import { Button } from '@/newui';
import { Categories } from '@/widgets/header/categories';
import { Submenu } from '@/widgets/header/submenu';
import { User } from '@/widgets/header/user';

import styles from './header.module.scss';

const linkNavItems = [
  {
    href: '/',
    title: 'sections.my-ivi',
  },
  {
    href: 'https://www.ivi.tv/new',
    title: 'sections.whats-new',
  },
];
const submenuNavItems = [
  {
    href: '/movies',
    title: 'sections.movies',
  },
  {
    href: '/series',
    title: 'sections.series',
  },
  {
    href: '/animation',
    title: 'sections.animation',
  },
];

export const Header: FC = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  useEffect(() => {
    const uuid = localStorage?.getItem('uuid');
    if (uuid) {
      return;
    }
    localStorage?.setItem('uuid', (Math.random() * 100).toString(36).slice(3));
  }, []);
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
                {linkNavItems.map(({ href, title }, index) => (
                  <li key={index} className={styles.menu__item}>
                    <Link href={href} className={styles.menu__link}>
                      {t(title)}
                    </Link>
                  </li>
                ))}
                {submenuNavItems.map(({ href, title }, index) => (
                  <li key={index} className={styles.menu__item}>
                    <Submenu title={t(title)} link={href}>
                      <Categories href={href} />
                    </Submenu>
                  </li>
                ))}
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
              <NoNotifications />
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
