import React, { FC } from 'react';

import { Vote } from '@/entities/vote';
import { writeDate } from '@/shared/helpers';
import { iReviewsItem } from '@/shared/types/kinopoiskTypes';

import styles from './CommentCard.module.scss';

interface iCommentComp {
  comment: iReviewsItem;
  onClick?: () => void;
}

export const CommentCard: FC<iCommentComp> = ({ comment, onClick }) => {
  const { author, title, description, negativeRating, positiveRating } = comment;

  return (
    <div className={styles.comment_card} onClick={() => onClick?.()}>
      <div className={styles.ugcTile}>
        <div className={styles.ugcTile_vote}>
          <Vote likes={positiveRating} dislikes={negativeRating} />
        </div>
        <div className={styles.ugcTile_inner}>
          <div className={styles.ugcTile_author}>{author || 'Guest'}</div>
          <div className={styles.ugcTile_textBlock}>{title}</div>
          <div className={styles.ugcTile_textBlock}>{description}</div>
          <div className={styles.ugcTile_date}>{writeDate(comment?.date)}</div>
        </div>
      </div>
    </div>
  );
};
