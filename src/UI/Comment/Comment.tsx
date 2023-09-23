import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { writeDate } from '@/helpers';
import { iReviewsItem } from '@/shared/types/kinopoiskTypes';
import { Button, CommentAvatar, CommentInput, P, Vote } from '@/UI';

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
        <CommentAvatar user={author} />
        <cite className={styles.item_cite}>{author || 'Guest'}</cite>
        <time className={styles.item_date}>{stringDate}</time>
        <Vote likes={positiveRating} dislikes={negativeRating} />
      </header>
      <div className={styles.clause}>
        <div className={styles.clause_title}>
          <P color={'gray'}>{title}</P>
        </div>
        <div className={styles.clause_text}>
          <P color={'gray-light'}>{description}</P>
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
