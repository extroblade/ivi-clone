import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

import styles from './submenu.module.scss';

export const Submenu = ({
  icon,
  user,
  title,
  link,
  outline,
  children,
}: {
  icon?: IconType;
  user?: string | null;
  title?: ReactNode;
  link?: string;
  outline?: boolean;
  children: ReactNode;
}) => {
  const IconComponent = icon || undefined;
  if (!user) {
    return (
      <div className={styles.submenu}>
        {icon &&
          IconComponent &&
          (link ? (
            <Link href={link}>
              <IconComponent
                className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
              />
            </Link>
          ) : (
            <IconComponent
              className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
            />
          ))}
        {link ? (
          <Link href={link} className={styles.submenu__button}>
            {title}
          </Link>
        ) : (
          <span className={styles.submenu__button}>{title}</span>
        )}
        <div className={styles.submenu__body}>
          <span className={styles.submenu__border}></span>
          <div className={styles.submenu__content}>{children}</div>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.submenu}>
      {link ? (
        <Link href={link} className={styles.submenu__buttonUser}>
          <Image src={user} alt="user" width={48} height={48} />
        </Link>
      ) : (
        <Image
          src={user}
          alt="user"
          width={48}
          height={48}
          className={!outline ? styles.submenu__button : styles.submenu__buttonOutline}
        />
      )}
      <div className={styles.submenu__body}>
        <span className={styles.submenu__border} />
        <div className={styles.submenu__content}>{children}</div>
      </div>
    </div>
  );
};
