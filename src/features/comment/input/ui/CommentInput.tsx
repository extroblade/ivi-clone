import { useSession } from 'next-auth/react';
import { FC, FormEvent, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar } from '@/features/comment/avatar/ui/avatar';
import { DEFAULT_LIMIT } from '@/features/comment/input/model/props';
import { Button } from '@/newui/button/button';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';

import styles from './styles.module.scss';

export const CommentInput: FC = (): JSX.Element => {
  const { t, i18n } = useTranslation();
  const [query, setQuery] = useState<string>('');
  const { data: session } = useSession();
  const createAlert = useCreateAlert();
  const isValid = useMemo(() => {
    return query?.length < DEFAULT_LIMIT && query?.length;
  }, [query?.length]);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.nativeEvent.preventDefault();
    createAlert({ title: 'Комментарий не отправлен', extra: 'POST запросы не работают' });

    setQuery(() => '');
  };

  return (
    <form className={styles.comment_form} onSubmit={handleSubmit}>
      <Avatar user={session?.user} />
      <div className={styles.input_container}>
        <div className={`${styles.input} ${isValid ? styles.invalid : ''}`}>
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
          {isValid
            ? i18n.language == 'en'
              ? `At least ${DEFAULT_LIMIT} characters, you entered ${query.length}`
              : `Минимум ${DEFAULT_LIMIT} символов, вы ввели ${query.length}`
            : ''}
        </div>
      </div>
      <Button appearance={'red'} disabled={!!(isValid || !query?.length)}>
        {t('buttons.send')}
      </Button>
    </form>
  );
};
