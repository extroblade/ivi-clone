import React, { FC } from 'react';
import CommentInput from '@/components/Comment/CommentInput';
import Comment from '@/components/Comment/Comment';
import styles from './Comment.module.scss';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';

const CommentSection: FC = (): JSX.Element => {
  const { currentMovie } = useAppSelector(selectModal);
  const { comments } = currentMovie;
  return (
    <div className={styles.comment_section}>
      <div>!!!warn: answers works with only first level children!!!</div>
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
