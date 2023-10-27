import { ReactNode } from 'react';

import styles from './header.module.scss';

export const Header = ({
  logo,
  actions,
  nav,
}: {
  nav: ReactNode;
  logo: ReactNode;
  actions: ReactNode;
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className={styles.row}>
          <div className={styles.body}>
            <div className={styles.logo}>{logo}</div>
            <nav className={styles.menu}>{nav}</nav>
          </div>
          <div className={styles.actions}>{actions}</div>
        </div>
      </div>
    </header>
  );
};
