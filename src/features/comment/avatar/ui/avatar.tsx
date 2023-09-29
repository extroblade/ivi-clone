import Image from 'next/image';
import React, { FC } from 'react';
import { FiUser } from 'react-icons/fi';

import { colors } from '@/features/comment/avatar/model/colors';
import { CommentAvatarProps } from '@/features/comment/avatar/model/props';
import styles from '@/features/comment/ui/Comment.module.scss';

export const Avatar: FC<CommentAvatarProps> = ({ user }): JSX.Element => {
  const color = typeof user === 'string' ? user?.split('')[0].charCodeAt(0) % 10 : 0;
  return (
    <div className={styles.user_image}>
      <div
        className={styles.image_container}
        style={{
          backgroundColor: `${colors[color as number] || colors[0]}`,
        }}
      >
        {typeof user === 'object' && user?.image && (
          <div className={styles.image_text}>
            <Image src={user.image} alt={'user'} fill />
          </div>
        )}
        {typeof user === 'object' && !user?.image && (
          <div className={styles.image_text}>
            <FiUser />
          </div>
        )}
        {(typeof user === 'string' || !user) && (
          <div className={styles.image_text}>{user ? user[0] : <FiUser />}</div>
        )}
      </div>
    </div>
  );
};
