import React, { FC, useMemo } from 'react';
import styles from './CommentCard.module.scss';
import { selectModal, setPersonItems, setShowPersonsModal } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import Vote from '@/components/Comment/Buttons/Vote';
import { writeDate } from '@/helpers/writeDate';
import { IComment } from '@/types/types';

interface iCommentComp {
  comment: IComment;
}

const CommentCard: FC<iCommentComp> = ({ comment }) => {
  const dispatch = useAppDispatch();
  const { personModalItem } = useAppSelector(selectModal);

  const stringDate = useMemo(() => {
    return writeDate(comment?.date);
  }, [comment?.date]);

  const open = () => {
    dispatch(setPersonItems({ ...personModalItem, index: 1 }));
    dispatch(setShowPersonsModal(true));
  };

  const { user, clause } = comment;

  return (
    <div className={styles.comment_card}>
      <div onClick={open} className={styles.ugcTile}>
        <div className={styles.ugcTile_vote}>
          <Vote />
        </div>
        <div className={styles.ugcTile_inner}>
          <div className={styles.ugcTile_author}>{user?.name || 'Guest'}</div>
          <div className={styles.ugcTile_textBlock}>{clause}</div>
          <div className={styles.ugcTile_date}>{stringDate}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
