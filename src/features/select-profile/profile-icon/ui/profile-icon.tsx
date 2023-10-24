import cn from 'classnames';
import { ReactNode } from 'react';
import { FiUser } from 'react-icons/fi';

import styles from './profile-icon.module.scss';

export const ProfileIcon = ({
  image,
  onClick,
  name,
  isActive,
}: {
  image?: ReactNode;
  name?: string | null;
  isActive?: boolean;
  onClick?: () => void;
}) => {
  return (
    <div onClick={() => onClick?.()} className={cn(styles.user, isActive && styles.active)}>
      <div className={styles.img}>{image ? image : <FiUser />}</div>
      <span title={name || ''} className={styles.name}>
        {name}
      </span>
    </div>
  );
};
