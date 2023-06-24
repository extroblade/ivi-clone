import React, { useMemo, useState } from 'react';
import styles from './Vote.module.scss';
import LikeButton from '@/components/Comment/Buttons/LikeButton';
import DisLikeButton from '@/components/Comment/Buttons/DisLikeButton';

const Vote = () => {
  const startValue = useMemo(() => {
    return Math.round(Math.random() * 200 - 100);
  }, []);
  const [value, setValue] = useState(startValue);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  const dislikeHandler = () => {
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
  const likeHandler = () => {
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

  const prevent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  return (
    <div className={styles.vote} onClick={prevent}>
      <LikeButton like={like} onClick={likeHandler} />
      <div
        className={`${styles.value} ${value > 0 && styles.success} ${value < 0 && styles.danger}`}
      >
        {value}
      </div>
      <DisLikeButton dislike={dislike} onClick={dislikeHandler} />
    </div>
  );
};

export default Vote;
