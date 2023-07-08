import React, { FC, useMemo, useState } from 'react';
import styles from './MovieList.module.scss';

import { P } from '@/UI/P/P';
import { Htag } from '@/UI/Htag/Htag';
import MovieCard from './MovieCard/MovieCard';
import { MovieListProps } from './MovieList.props';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { getRemainingFilmAmount } from '@/helpers/remainingAmount';

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
        <P className={styles.amount} onClick={changeState} title={isOpen ? 'Скрыть' : 'Развернуть'}>
          {list?.length} {i18next.language == 'en' ? 'movies' : allAmount}
        </P>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cards}>
        {list?.slice(0, 8).map((card) => {
          return <MovieCard key={card.kinopoiskId || card.filmId} card={card} />;
        })}
        {!isOpen && list?.length > 8 ? (
          <P onClick={changeState} className={styles.link}>
            {t('buttons.more')} {list?.length - 8}
            {i18next.language == 'en' ? ' movies' : remainingAmount}
          </P>
        ) : (
          list?.slice(8, list?.length).map((card) => {
            return <MovieCard key={card.kinopoiskId || card.filmId} card={card} />;
          })
        )}
      </div>
    </div>
  );
};

export default MovieList;
