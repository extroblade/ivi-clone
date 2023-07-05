import React, { FC, useMemo } from 'react';
import styles from './CommentCard.module.scss';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import Vote from '@/components/Comment/Buttons/Vote';
import { writeDate } from '@/helpers/writeDate';
import { iReviewsItem } from '@/types/kinopoiskTypes';

interface iCommentComp {
  comment: iReviewsItem;
}

const CommentCard: FC<iCommentComp> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const { currentMovie } = useAppSelector(selectModal);

  const stringDate = useMemo(() => {
    return writeDate(comment?.date);
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

export default CommentCard;
