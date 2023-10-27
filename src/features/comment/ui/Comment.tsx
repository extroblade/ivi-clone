import dayjs from 'dayjs';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Vote } from '@/entities/vote/ui/vote';
import { Avatar } from '@/features/comment/avatar/ui/avatar';
import { CommentInput } from '@/features/comment/input/ui/CommentInput';
import { useBooleanState } from '@/shared/hooks';
import { iReviewsItem } from '@/shared/types/kinopoiskTypes';
import { Button, Text } from '@/shared/ui';

import styles from './Comment.module.scss';

export const Comment = memo(
  ({ comment, children }: { comment: iReviewsItem; children?: iReviewsItem[] }): JSX.Element => {
    const { t } = useTranslation();
    const [isActive, { handleToggle }] = useBooleanState();
    const { author, date, title, description, negativeRating, positiveRating } = comment;
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
            <Text color={'gray'} size={'M'}>
              {title}
            </Text>
          </div>
          <div className={styles.clause_text}>
            <Text
              color={'gray-light'}
              size={'S'}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
        <div className={styles.interactions}>
          <Button size={'S'} appearance={'transparent'} onClick={handleToggle}>
            {isActive ? t('buttons.collapse') : t('buttons.answer')}
          </Button>
        </div>
        {isActive && <CommentInput />}
        {children && (
          <ul>
            {children.map((child) => (
              <Comment key={child.kinopoiskId} comment={child} />
            ))}
          </ul>
        )}
      </li>
    );
  }
);
