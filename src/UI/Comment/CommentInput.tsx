import { useSession } from 'next-auth/react';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { createNewAlert } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectModal, setActiveAlerts } from '@/store';
import { CommentAvatar } from '@/UI';
import { Button } from '@/UI/Button/Button';

import styles from './Comment.module.scss';
const LIMIT = 5;

export const CommentInput: FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState<string>('');
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const { activeAlerts } = useAppSelector(selectModal);
  const validate = () => {
    return query?.length < LIMIT && query?.length;
  };
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.nativeEvent.preventDefault();
    const newAlertList = createNewAlert(
      'Комментарий не отправлен',
      'POST запросы не работают',
      activeAlerts
    );
    dispatch(setActiveAlerts(newAlertList));
    setQuery(() => '');
  };

  return (
    <form className={styles.comment_form} onSubmit={(e) => submit(e)}>
      <CommentAvatar user={session?.user} />
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
