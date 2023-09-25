import cn from 'classnames';
import { FC } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

import { Button } from '@/newui';

import { VoteButtonProps } from '../model/props';
import styles from './vote-button.module.scss';

export const VoteButton: FC<VoteButtonProps> = ({ variant, isActive, onClick }): JSX.Element => {
  return (
    <Button
      appearance={'transparent'}
      className={cn(styles[variant], isActive && styles.active)}
      onClick={onClick}
    >
      {isActive ? <AiFillLike /> : <AiOutlineLike />}
    </Button>
  );
};
