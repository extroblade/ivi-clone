import React, { FC } from 'react';
import styles from '@/UI/Comment/Comment.module.scss';
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

interface iUser {
  name: string;
  image: string;
}

export type CommentAvatarProps = {
  user: iUser | string | null;
};

const CommentAvatar: FC<CommentAvatarProps> = ({ user }): JSX.Element => {
  const color = user?.length ? user?.split('')[0].charCodeAt(0) % 10 : 0;
  return (
    <div className={styles.user_image}>
      <div
        className={styles.image_container}
        style={{
          backgroundColor: `${colors[color as number] || colors[0]}`,
        }}
      >
        {user?.image ? (
          <Image src={user.image} alt={'user'} fill />
        ) : (
          <div className={styles.image_text}>{user ? user[0] : <FiUser />}</div>
        )}
      </div>
    </div>
  );
};

export default CommentAvatar;
