import React, { FC } from 'react';

import { CommentInput } from '@/features/comment/input/ui/CommentInput';
import { Loader } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { useFetchCommentsQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';

import { Comment } from '../../ui/Comment';
import styles from './section.module.scss';

export const CommentSection: FC = (): JSX.Element => {
  const { currentMovie } = useAppSelector(selectModal);
  const {
    data: comments,
    isLoading,
    error,
  } = useFetchCommentsQuery({ id: currentMovie?.kinopoiskId || 0 });
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
