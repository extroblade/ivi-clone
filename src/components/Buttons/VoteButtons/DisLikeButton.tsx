import React, { FC } from 'react';
import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';

import { Button } from '@/UI';
import styles from '@/UI/Comment/Vote/Vote.module.scss';

export const DisLikeButton: FC<{ dislike: boolean; onClick: () => void }> = ({
  dislike,
  onClick,
}): JSX.Element => {
  return (
    <Button
      appearance={'transparent'}
      className={`${styles.buttonDown} ${dislike ? styles.active : ''}`}
      onClick={() => onClick?.()}
    >
      {dislike ? <AiFillDislike /> : <AiOutlineDislike />}
    </Button>
  );
};
