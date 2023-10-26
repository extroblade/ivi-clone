import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { SwitchLanguage } from '@/features/switch-language';
import { Button } from '@/shared/ui';
import { Categories } from '@/widgets/header/categories';
import { Submenu } from '@/widgets/header/submenu';
import { SearchButton } from '@/widgets/search';

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

export const Header = ({ logo, actions }: { logo: ReactNode; actions: ReactNode }) => {
  const { t } = useTranslation();
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
            <div className={styles.logo}>{logo}</div>
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
                <Button size={'M'} appearance={'red'}>
                  {t('header.watch-free')}
                </Button>
              </div>
            </div>
            <div className={styles.zindex}>
              <SearchButton />
            </div>
          </div>
          <div className={styles.actions}>{actions}</div>
        </div>
      </div>
    </header>
  );
};
