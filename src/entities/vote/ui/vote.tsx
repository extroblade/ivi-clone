import cn from 'classnames';
import { MouseEvent, useEffect, useState } from 'react';

import { useBooleanState } from '@/shared/hooks';

import { VoteButton } from '../vote-button/ui/vote-button';
import styles from './vote.module.scss';

export const Vote = ({ likes = 0, dislikes = 0 }: { likes?: number; dislikes?: number }) => {
  const [value, setValue] = useState(likes - dislikes);
  const [isLiked, { handleClose: handleUnsetLike, handleToggle: handleLikeToggle }] =
    useBooleanState();
  const [isDisliked, { handleClose: handleUnsetDislike, handleToggle: handleDislikeToggle }] =
    useBooleanState();
  useEffect(() => {
    setValue(() => likes - dislikes + +isLiked - +isDisliked);
  }, [isDisliked, isLiked]);
  const handleDislikeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDislikeToggle();
    handleUnsetLike();
  };
  const handleLikeClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleLikeToggle();
    handleUnsetDislike();
  };

  return (
    <div className={styles.vote}>
      <VoteButton variant={'like'} isActive={isLiked} onClick={handleLikeClick} />
      <div className={cn(styles.value, value > 0 && styles.success, value < 0 && styles.danger)}>
        {value}
      </div>
      <VoteButton variant={'dislike'} isActive={isDisliked} onClick={handleDislikeClick} />
    </div>
  );
};
