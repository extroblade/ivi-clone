import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Vote } from '@/entities/vote/ui/vote';
import { Avatar } from '@/features/comment/avatar/ui/avatar';
import { CommentInput } from '@/features/comment/input/ui/CommentInput';
import { Button, Text } from '@/newui';
import { writeDate } from '@/shared/helpers';
import { iReviewsItem } from '@/shared/types/kinopoiskTypes';

import styles from './Comment.module.scss';

interface iCommentComp {
  comment: iReviewsItem;
  children?: iReviewsItem[];
}

export const Comment: FC<iCommentComp> = React.memo(({ comment, children }): JSX.Element => {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState<boolean>(false);
  const { author, date, title, description, negativeRating, positiveRating } = comment;
  const stringDate = writeDate(date);
  const switcher = () => {
    setAnswer((ans) => !ans);
  };

  return (
    <li className={styles.comment}>
      <header className={styles.user_info}>
        <Avatar user={author} />
        <cite className={styles.item_cite}>{author || 'Guest'}</cite>
        <time className={styles.item_date}>{stringDate}</time>
        <Vote likes={positiveRating} dislikes={negativeRating} />
      </header>
      <div className={styles.clause}>
        <div className={styles.clause_title}>
          <Text color={'gray'}>{title}</Text>
        </div>
        <div className={styles.clause_text}>
          <Text color={'gray-light'}>{description}</Text>
        </div>
      </div>
      <div className={styles.interactions}>
        <Button size={'S'} appearance={'transparent'} onClick={switcher}>
          {answer ? t('buttons.collapse') : t('buttons.answer')}
        </Button>
      </div>
      {answer && <CommentInput />}
      {children && (
        <ul>
          {children.map((child) => (
            <Comment key={child.kinopoiskId} comment={child} />
          ))}
        </ul>
      )}
    </li>
  );
});
