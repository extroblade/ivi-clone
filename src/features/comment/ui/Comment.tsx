import dayjs from 'dayjs';
import { FC, memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Vote } from '@/entities/vote/ui/vote';
import { Avatar } from '@/features/comment/avatar/ui/avatar';
import { CommentInput } from '@/features/comment/input/ui/CommentInput';
import { CommentProps } from '@/features/comment/model/props';
import { Button, Text } from '@/newui';

import styles from './Comment.module.scss';

export const Comment: FC<CommentProps> = memo(({ comment, children }): JSX.Element => {
  const { t } = useTranslation();
  const [showInput, setShowInput] = useState<boolean>(false);
  const { author, date, title, description, negativeRating, positiveRating } = comment;
  const handleToggleInput = () => {
    setShowInput((ans) => !ans);
  };
  return (
    <li className={styles.comment}>
      <header className={styles.user_info}>
        <Avatar user={author} />
        <cite className={styles.item_cite}>{author || 'Guest'}</cite>
        <time className={styles.item_date}>{dayjs(date).format('DD.MM.YYYY')}</time>
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
        <Button size={'S'} appearance={'transparent'} onClick={handleToggleInput}>
          {showInput ? t('buttons.collapse') : t('buttons.answer')}
        </Button>
      </div>
      {showInput && <CommentInput />}
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
