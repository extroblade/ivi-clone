import React, { FC, useState } from 'react';
import CommentAvatar from '@/components/Comment/CommentAvatar';
import { Button } from '@/components/Button/Button';
import styles from './Comment.module.scss';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectAuth } from '@/store/reducers/auth.slice';
import { selectModal, setActiveAlerts } from '@/store/reducers/modals.slice';
const LIMIT = 5;

const CommentInput: FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState<string>('');
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(selectAuth);
  const { data: session } = useSession();
  const { activeAlerts } = useAppSelector(selectModal);
  const validate = () => {
    return query?.length < LIMIT && query?.length;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.nativeEvent.preventDefault();
    const cur = [];
    const newAlert = {
      id: self.crypto.randomUUID(),
      title: 'Комментарий не отправлен',
      extra: 'POST запросы не работают',
    };
    if (activeAlerts?.length && !activeAlerts?.find((alert) => alert.id == newAlert.id)) {
      cur.push(...activeAlerts, newAlert);
    } else {
      cur.push(newAlert);
    }
    dispatch(setActiveAlerts(cur));
    setQuery(() => '');
  };

  return (
    <form className={styles.comment_form} onSubmit={(e) => submit(e)}>
      <CommentAvatar user={session?.user || user || null} />
      <div className={styles.input_container}>
        <div className={`${styles.input} ${validate() ? styles.invalid : ''}`}>
          <input
            className={!!query ? styles.input__active : ''}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <label>{t('buttons.write-comment')}</label>
          <div className={styles.stripe} />
        </div>
        <div className={`${styles.caption} ${styles.danger}`}>
          {validate()
            ? i18n.language == 'en'
              ? `At least ${LIMIT} characters, you entered ${query.length}`
              : `Минимум ${LIMIT} символов, вы ввели ${query.length}`
            : ''}
        </div>
      </div>
      <Button appearance={'red'} disabled={!!(validate() || !query?.length)}>
        {t('buttons.send')}
      </Button>
    </form>
  );
};

export default CommentInput;
