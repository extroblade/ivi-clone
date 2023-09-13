import React, { FC } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

import { Button } from '@/UI/Button/Button';
import styles from '@/UI/Comment/Vote/Vote.module.scss';

export const LikeButton: FC<{ like: boolean }> = ({ like, ...props }): JSX.Element => {
  return (
    <Button
      appearance={'transparent'}
      className={`${styles.buttonUp} ${like ? styles.active : ''}`}
      {...props}
    >
      {like ? <AiFillLike /> : <AiOutlineLike />}
    </Button>
  );
};
