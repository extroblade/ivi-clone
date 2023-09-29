import cn from 'classnames';
import { FC, MouseEvent, useState } from 'react';

import { VoteProps } from '@/entities/vote/model/props';
import { VoteButton } from '@/entities/vote/vote-button/ui/vote-button';

import styles from './vote.module.scss';

export const Vote: FC<VoteProps> = ({ likes = 0, dislikes = 0 }) => {
  const [value, setValue] = useState(likes - dislikes);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const dislikeHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!like && !dislike) {
      setDislike(() => true);
      setValue((val) => val - 1);
    } else if (like) {
      setLike(() => false);
      setDislike(() => true);
      setValue((val) => val - 2);
    } else {
      setDislike(() => false);
      setValue((val) => val + 1);
    }
  };
  const likeHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!like && !dislike) {
      setLike(() => true);
      setValue((val) => val + 1);
    } else if (dislike) {
      setDislike(() => false);
      setLike(() => true);
      setValue((val) => val + 2);
    } else {
      setLike(() => false);
      setValue((val) => val - 1);
    }
  };

  return (
    <div className={styles.vote}>
      <VoteButton variant={'like'} isActive={like} onClick={likeHandler} />
      <div className={cn(styles.value, value > 0 && styles.success, value < 0 && styles.danger)}>
        {value}
      </div>
      <VoteButton variant={'dislike'} isActive={dislike} onClick={dislikeHandler} />
    </div>
  );
};
