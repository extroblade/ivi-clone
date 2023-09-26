import { FC, ReactNode } from 'react';

import { Footer, Header } from '@/components';

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
