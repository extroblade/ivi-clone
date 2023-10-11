import { useRouter } from 'next/router';
import { FC } from 'react';

import { CommentInput } from '@/features/comment/input/ui/CommentInput';
import { Loader } from '@/newui';
import { useFetchCommentsQuery } from '@/shared/services';

import { Comment } from '../../ui/Comment';
import styles from './section.module.scss';

export const CommentSection: FC = (): JSX.Element => {
  const router = useRouter();
  const {
    data: comments,
    isLoading,
    error,
  } = useFetchCommentsQuery({ id: Number(router.query?.id) }, { skip: !router.query?.id });
  if (isLoading) return <Loader />;
  if (error) return <></>;
  return (
    <div className={styles.comment_section}>
      <CommentInput />
      <ul>
        {comments?.items.map((comment) => (
          <Comment comment={comment} key={comment.kinopoiskId} />
        ))}
      </ul>
    </div>
  );
};
