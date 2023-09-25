import React, { FC, useMemo } from 'react';

import { writeDate } from '@/shared/helpers';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/shared/store';
import { iReviewsItem } from '@/shared/types/kinopoiskTypes';
import { Vote } from '@/UI';

import styles from './CommentCard.module.scss';

interface iCommentComp {
  comment: iReviewsItem;
}

export const CommentCard: FC<iCommentComp> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const { currentMovie } = useAppSelector(selectModal);

  const stringDate = useMemo(() => {
    if (comment?.date) {
      return writeDate(comment.date);
    }
  }, [comment?.date]);

  const openComments = () => {
    dispatch(setCurrentMovie({ ...currentMovie, index: 1 }));
    dispatch(setShowWatchPageModal(true));
  };

  const { author, title, description, negativeRating, positiveRating } = comment;

  return (
    <div className={styles.comment_card} onClick={openComments}>
      <div className={styles.ugcTile}>
        <div className={styles.ugcTile_vote}>
          <Vote likes={positiveRating} dislikes={negativeRating} />
        </div>
        <div className={styles.ugcTile_inner}>
          <div className={styles.ugcTile_author}>{author || 'Guest'}</div>
          <div className={styles.ugcTile_textBlock}>{title}</div>
          <div className={styles.ugcTile_textBlock}>{description}</div>
          <div className={styles.ugcTile_date}>{stringDate}</div>
        </div>
      </div>
    </div>
  );
};
