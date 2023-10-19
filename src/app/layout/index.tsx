import { ReactNode } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

export const Layout = ({ children }: { children: ReactNode }) => {
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
