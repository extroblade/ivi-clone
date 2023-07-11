import React, { FC } from 'react';
import CommentInput from '@/UI/Comment/CommentInput';
import Comment from '@/UI/Comment/Comment';
import styles from './Comment.module.scss';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { useFetchCommentsQuery } from '@/services/movie.api';
import Loader from '@/UI/Loader/Loader';

const CommentSection: FC = (): JSX.Element => {
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

export default CommentSection;
