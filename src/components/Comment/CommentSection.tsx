import React, { FC, useEffect, useState } from 'react';
import CommentInput from '@/components/Comment/CommentInput';
import Comment from '@/components/Comment/Comment';
import styles from './Comment.module.scss';
import { useFetchAllCommentsQuery } from '@/services/comments.api';
import Loader from '@/components/Loader/Loader';

interface ICommentSection {
  id: string | number;
}

const CommentSection: FC<ICommentSection> = ({ id }): JSX.Element => {
  const { data: comments, isLoading, error } = useFetchAllCommentsQuery();
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
    if (comments?.length) {
      const temp = comments?.find((comment) => comment.id == id)?.commentsData || [];
      setCommentsData(() => temp);
    }
  }, [comments?.length, id]);
  return (
    <div className={styles.comment_section}>
      <div>!!!warn: answers works with only first level children!!!</div>
      <CommentInput id={id} />
      <ul>
        {isLoading && <Loader />}
        {!error && commentsData?.length
          ? [...commentsData]
              .sort((a, b) => a.id - b.id)
              .map((comment) => <Comment comment={comment} key={comment.id} />)
          : ''}
      </ul>
    </div>
  );
};

export default CommentSection;
