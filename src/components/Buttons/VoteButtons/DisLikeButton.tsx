import React, { FC } from 'react';
import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';

import { Button } from '@/UI/Button/Button';
import styles from '@/UI/Comment/Vote/Vote.module.scss';

export const DisLikeButton: FC<{ dislike: boolean }> = ({ dislike, ...props }): JSX.Element => {
  return (
    <Button
      appearance={'transparent'}
      className={`${styles.buttonDown} ${dislike ? styles.active : ''}`}
      {...props}
    >
      {dislike ? <AiFillDislike /> : <AiOutlineDislike />}
    </Button>
  );
};
