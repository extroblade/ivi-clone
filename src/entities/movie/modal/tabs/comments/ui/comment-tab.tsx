import { useRouter } from 'next/router';

import { Comment } from '@/features/comment';
import { CommentInput } from '@/features/comment/input/ui/CommentInput';
import { useFetchCommentsQuery } from '@/shared/services';
import { Loader } from '@/shared/ui';

import styles from './section.module.scss';

export const CommentTab = () => {
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
