import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';
import { BiUser } from 'react-icons/bi';
import { MdNotificationsNone } from 'react-icons/md';

import { NoNotifications } from '@/entities/no-notifications';
import { Logo } from '@/shared/ui';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { Submenu } from '@/widgets/header/submenu';
import { User } from '@/widgets/header/user';

export const Layout = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();

  return (
    <div className="wrapper">
      <Header
        logo={<Logo />}
        actions={
          <>
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
