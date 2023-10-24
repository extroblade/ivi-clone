import cn from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';

import { Button } from '@/shared/ui';

import styles from './vote-button.module.scss';

export const VoteButton = ({
  variant,
  isActive,
  ...props
}: {
  variant: 'like' | 'dislike';
  isActive: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
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
