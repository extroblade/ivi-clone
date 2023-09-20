import React, { FC } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

import { Button } from '@/UI';
import styles from '@/UI/Comment/Vote/Vote.module.scss';

export const LikeButton: FC<{ like: boolean; onClick: () => void }> = ({
  like,
  onClick,
}): JSX.Element => {
  return (
    <Button
      appearance={'transparent'}
      className={`${styles.buttonUp} ${like ? styles.active : ''}`}
      onClick={() => onClick?.()}
    >
      {like ? <AiFillLike /> : <AiOutlineLike />}
    </Button>
  );
};
