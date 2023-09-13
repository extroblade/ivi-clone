import React, { FC } from 'react';

import { useAppSelector } from '@/hooks';
import { useFetchCommentsQuery } from '@/services';
import { selectModal } from '@/store';
import { Comment, CommentInput, Loader } from '@/UI';

import styles from './Comment.module.scss';
export const CommentSection: FC = (): JSX.Element => {
  const { currentMovie } = useAppSelector(selectModal);
  const {
    data: comments,
    isLoading,
    error,
  } = useFetchCommentsQuery({ id: currentMovie.kinopoiskId });
  if (isLoading) return <Loader />;
  if (error || !comments?.total) return <></>;
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
