import cn from 'classnames';
import { FC } from 'react';
import { FiUser } from 'react-icons/fi';

import { ProfileIconProps } from '../model/props';
import styles from './profile-icon.module.scss';

export const ProfileIcon: FC<ProfileIconProps> = ({ image, onClick, name, isActive }) => {
  return (
    <div onClick={() => onClick?.()} className={cn(styles.user, isActive && styles.active)}>
      <div className={styles.img}>{image ? <>{image}</> : <FiUser />}</div>
      <span title={name || ''} className={styles.name}>
        {name}
      </span>
    </div>
  );
};
