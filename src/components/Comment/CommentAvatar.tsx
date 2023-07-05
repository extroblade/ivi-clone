import React, { FC } from 'react';
import styles from '@/components/Comment/Comment.module.scss';
import { FiUser } from 'react-icons/fi';
import Image from 'next/image';

const colors: string[] = [
  '#313131',
  '#c74d1f',
  '#d0af23',
  '#212bb6',
  '#0bae0b',
  '#ae0ba6',
  '#0baeae',
  '#af0a0a',
  '#5716b9',
  '#1dbe6d',
];

export type CommentAvatarProps = {
  user: string | null;
};

const CommentAvatar: FC<CommentAvatarProps> = ({ user }): JSX.Element => {
  const color = user ? (user.split('')[0].charCodeAt(0) - 97) % 10 : 0;
  return (
    <div className={styles.user_image}>
      {user?.image ? (
        <Image
          src={user.image}
          alt={'user'}
          width={20}
          height={20}
          className={styles.image_container}
        />
      ) : (
        <div
          className={styles.image_container}
          style={{
            backgroundColor: `${colors[color as number]}`,
          }}
        >
          <div className={styles.image_text}>{user ? user[0] : <FiUser />}</div>
        </div>
      )}
    </div>
  );
};

export default CommentAvatar;
