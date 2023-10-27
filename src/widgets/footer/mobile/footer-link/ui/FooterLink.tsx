import cn from 'classnames';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

import styles from './FooterLink.module.scss';

export const FooterLink = ({
  title,
  href,
  icon,
  openModal,
  isOpen,
}: {
  title: ReactNode;
  href?: string;
  icon: IconType;
  openModal?: () => void;
  modal?: boolean;
  isOpen?: boolean;
}) => {
  const IconComponent = icon;
  const router = useRouter();
  const handleOpen = async () => {
    if (openModal) {
      openModal();
      return;
    }
    if (!href) {
      return;
    }
    await router.push(href);
  };
  return (
    <div
      className={cn(styles.link, router.pathname === href || isOpen ? styles.link__active : '')}
      onClick={handleOpen}
    >
      <IconComponent className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};
