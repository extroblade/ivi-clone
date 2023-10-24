import dayjs from 'dayjs';

import { Vote } from '@/entities/vote';
import { iReviewsItem } from '@/shared/types/kinopoiskTypes';

import styles from './CommentCard.module.scss';

export const CommentCard = ({
  comment,
  onClick,
}: {
  comment: iReviewsItem;
  onClick?: () => void;
}) => {
  const { author, date, title, description, negativeRating, positiveRating } = comment;

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
          <div className={styles.ugcTile_date}>{dayjs(date).format('DD.MM.YYYY')}</div>
        </div>
      </div>
    </div>
  );
};
