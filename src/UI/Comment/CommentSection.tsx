import React, { FC } from 'react';
import CommentInput from '@/UI/Comment/CommentInput';
import Comment from '@/UI/Comment/Comment';
import styles from './Comment.module.scss';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';

const CommentSection: FC = (): JSX.Element => {
  const { currentMovie } = useAppSelector(selectModal);
  const { comments } = currentMovie;
  return (
    <div className={styles.comment_section}>
      <CommentInput />
      <ul>
        {comments?.total
          ? comments.items.map((comment) => <Comment comment={comment} key={comment.kinopoiskId} />)
          : ''}
      </ul>
    </div>
  );
};

export default CommentSection;
