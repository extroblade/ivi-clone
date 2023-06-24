import React, { FC } from 'react';
import styles from './Vote.module.scss';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { Button } from '@/components/Button/Button';

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
