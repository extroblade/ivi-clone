import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import { ProfileIconProps } from '@/entities/profile-icon/model/props';

import styles from './profile-icon.module.scss';

export const ProfileIcon: FC<ProfileIconProps> = ({ image, name, isActive = false }) => {
  return (
    <div className={cn(styles.profile__user, isActive && styles.active)}>
      <div className={styles.profile__image}>
        {image ? (
          <Image className={styles.profile__image} src={image} alt="user" width={48} height={48} />
        ) : (
          <span className={styles.profile__add} />
        )}
      </div>
      <span>{name}</span>
    </div>
  );
};
