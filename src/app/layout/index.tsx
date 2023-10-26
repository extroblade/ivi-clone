import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BiUser } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';

import { NoNotifications } from '@/entities/no-notifications';
import { SwitchLanguage } from '@/features/switch-language';
import { Button, Logo } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Categories } from '@/widgets/header/categories';
import { Submenu } from '@/widgets/header/submenu';
import { User } from '@/widgets/header/user';
import { SearchButton } from '@/widgets/search';

import styles from './layout.module.scss';
import { linkNavItems, submenuNavItems } from './settings';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  useEffect(() => {
    const uuid = localStorage?.getItem('uuid');
    if (uuid) {
      return;
    }
    localStorage?.setItem('uuid', (Math.random() * 100).toString(36).slice(3));
  }, []);
  const { t } = useTranslation();
  return (
    <div className="wrapper">
      <Header
        logo={<Logo />}
        nav={
          <ul className={styles.list}>
            {linkNavItems.map(({ href, title }, index) => (
              <li key={index}>
                <Link href={href} className={styles.link}>
                  {t(title)}
                </Link>
              </li>
            ))}
            {submenuNavItems.map(({ href, title }, index) => (
              <li key={index}>
                <Submenu title={t(title)} link={href}>
                  <Categories href={href} />
                </Submenu>
              </li>
            ))}
          </ul>
        }
        actions={
          <>
            <SwitchLanguage />
            <Button size={'M'} appearance={'red'}>
              {t('header.watch-free')}
            </Button>
            <SearchButton />
            <Submenu icon={MdNotificationsNone} link={'/notifications'}>
              <NoNotifications />
            </Submenu>
            <Submenu icon={BiUser} user={session?.user?.image} link={'/profile'} outline>
              <User />
            </Submenu>
          </>
        }
      />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
