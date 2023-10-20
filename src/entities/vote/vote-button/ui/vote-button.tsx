import cn from 'classnames';
import { FC } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

import { Button } from '@/shared/ui';

import { VoteButtonProps } from '../model/props';
import styles from './vote-button.module.scss';

export const VoteButton: FC<VoteButtonProps> = ({ variant, isActive, ...props }): JSX.Element => {
  return (
    <Button
      appearance={'transparent'}
      className={cn(styles[variant], isActive && styles.active)}
      {...props}
    >
      {isActive ? <AiFillLike /> : <AiOutlineLike />}
    </Button>
  );
};
