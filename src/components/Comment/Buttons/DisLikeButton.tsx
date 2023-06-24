import React, { FC } from 'react';
import styles from '@/components/Comment/Comment.module.scss';
import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import { Button } from '@/components/Button/Button';

const DisLikeButton: FC = ({ dislike, ...props }): JSX.Element => {
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

export default DisLikeButton;
