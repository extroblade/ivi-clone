import i18next from 'i18next';
import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { MovieCard } from '@/components';
import { Text } from '@/newui';
import { getRemainingFilmAmount } from '@/shared/helpers';
import { Htag } from '@/UI';

import styles from './MovieList.module.scss';
import { MovieListProps } from './MovieList.props';

const MovieList: FC<MovieListProps> = ({ list }) => {
  const [isOpen, setIsOpen] = useState(false);

  const allAmount = useMemo(() => {
    return getRemainingFilmAmount(list?.length);
  }, [list?.length]);
  const remainingAmount = useMemo(() => {
    return getRemainingFilmAmount(list?.length - 8);
  }, [list?.length]);
  const { t } = useTranslation();

  const changeState = () => {
    setIsOpen((state) => !state);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <Htag tag={'h3'}>{t('descriptions.complete-filmography')}</Htag>
        <Text
          className={styles.amount}
          onClick={changeState}
          title={isOpen ? 'Скрыть' : 'Развернуть'}
        >
          {list?.length} {i18next.language == 'en' ? 'movies' : allAmount}
        </Text>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cards}>
        {!isOpen && list?.length > 8 ? (
          <>
            {list?.slice(0, 8).map((card) => {
              return <MovieCard key={card.kinopoiskId || card.filmId} card={card} />;
            })}
            <Text onClick={changeState} className={styles.link}>
              {t('buttons.more')} {list?.length - 8}
              {i18next.language == 'en' ? ' movies' : remainingAmount}
            </Text>
          </>
        ) : (
          <>
            {list.map((card) => {
              return <MovieCard key={card.kinopoiskId || card.filmId} card={card} />;
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default MovieList;
