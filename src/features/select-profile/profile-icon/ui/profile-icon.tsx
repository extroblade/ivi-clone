import cn from 'classnames';
import { FC } from 'react';
import { FiUser } from 'react-icons/fi';

import { ProfileIconProps } from '@/features/select-profile/profile-icon/model/props';

import styles from './profile-icon.module.scss';

export const ProfileIcon: FC<ProfileIconProps> = ({ image, name, isActive = false }) => {
  return (
    <div title={name || ''} className={cn(styles.user, isActive && styles.active)}>
      <div className={styles.img}>
        {image ? (
          <>{image}</>
        ) : (
          <div className={cn(styles.no_image, styles.img)}>
            <FiUser />
          </div>
        )}
      </div>
      {name && <span className={styles.name}>{name}</span>}
    </div>
  );
};
