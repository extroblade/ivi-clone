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
  return (
    <div
      className={cn(styles.link, router.pathname === href || isOpen ? styles.link__active : '')}
      onClick={openModal}
    >
      <IconComponent className={styles.icon} />
      <span className={styles.title}>{title}</span>
    </div>
  );
};
