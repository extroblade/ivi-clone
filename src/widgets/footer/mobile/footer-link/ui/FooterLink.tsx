import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { FooterLinkProps } from '../model/FooterLink.props';
import styles from './FooterLink.module.scss';

export const FooterLink: FC<FooterLinkProps> = ({
  title,
  href,
  icon,
  openModal,
  isOpen,
}): JSX.Element => {
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
