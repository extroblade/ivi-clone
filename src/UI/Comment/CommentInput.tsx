import { useSession } from 'next-auth/react';
import { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/newui/button/button';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';
import { CommentAvatar } from '@/UI';

import styles from './Comment.module.scss';
const LIMIT = 5;

export const CommentInput: FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState<string>('');
  const { data: session } = useSession();
  const createAlert = useCreateAlert();
  const validate = () => query?.length < LIMIT && query?.length;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.nativeEvent.preventDefault();
    createAlert({ title: 'Комментарий не отправлен', extra: 'POST запросы не работают' });

    setQuery(() => '');
  };

  return (
    <form className={styles.comment_form} onSubmit={handleSubmit}>
      <CommentAvatar user={session?.user} />
      <div className={styles.input_container}>
        <div className={`${styles.input} ${validate() ? styles.invalid : ''}`}>
          <input
            className={!!query ? styles.input__active : ''}
            type="text"
            value={query}
            onChange={({ target: { value } }) => setQuery(value)}
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
