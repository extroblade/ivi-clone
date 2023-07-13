import React, { FC } from 'react';
import styles from '../../../UI/Comment/Vote/Vote.module.scss';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { Button } from '@/UI/Button/Button';

const LikeButton: FC = ({ like, ...props }): JSX.Element => {
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

export default LikeButton;
