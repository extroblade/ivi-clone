import React, { FC, useState } from 'react';
import styles from './Comment.module.scss';
import { P } from '@/components/P/P';
import { Button } from '@/components/Button/Button';
import CommentAvatar from '@/components/Comment/CommentAvatar';
import CommentInput from '@/components/Comment/CommentInput';
import { useTranslation } from 'react-i18next';
import { IComment } from '@/types/types';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { writeDate } from '@/helpers/writeDate';
import Vote from '@/components/Comment/Buttons/Vote';

interface iCommentComp {
  comment: IComment;
}

const Comment: FC<iCommentComp> = ({ comment }): JSX.Element => {
  const { t } = useTranslation();
  const [answer, setAnswer] = useState<boolean>(false);
  const { user, date, clause, children, id } = comment;
  const stringDate = writeDate(date);
  const switcher = () => {
    setAnswer((ans) => !ans);
  };
  const { personModalItem } = useAppSelector(selectModal);
  return (
    <li className={styles.comment}>
      <header className={styles.user_info}>
        <CommentAvatar user={user} />
        <cite className={styles.item_cite}>{user?.name || 'Guest'}</cite>
        <time className={styles.item_date}>{stringDate}</time>
        <Vote />
      </header>
      <div className={styles.clause}>
        <div className={styles.clause_text}>
          <P color={'white'}>{clause}</P>
        </div>
      </div>
      <div className={styles.interactions}>
        <Button size={'S'} appearance={'transparent'} onClick={switcher}>
          {answer ? t('buttons.collapse') : t('buttons.answer')}
        </Button>
      </div>
      {answer && <CommentInput id={personModalItem?.id} parentId={id} />}
      {children && (
        <ul>
          {children.map((child) => (
            <Comment key={child.id} comment={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default React.memo(Comment);
