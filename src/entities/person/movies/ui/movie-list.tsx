import i18next from 'i18next';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { MovieCard } from '@/entities/person/movies/card/ui/movie-card';
import { MovieListProps } from '@/entities/person/movies/model/props';
import { Button, Text, Title } from '@/newui';
import { getRemainingFilmAmount } from '@/shared/helpers';
import { useBooleanState } from '@/shared/hooks';
import { StaffFilm } from '@/shared/types/kinopoiskTypes';

import styles from './movie-list.module.scss';

export const MovieList: FC<MovieListProps> = ({ list }) => {
  const [isOpen, { handleToggle }] = useBooleanState();
  const { t } = useTranslation();

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>
        <Title tag={'h3'}>{t('descriptions.complete-filmography')}</Title>
        <Button
          appearance={'transparent'}
          className={styles.amount}
          onClick={handleToggle}
          title={isOpen ? 'Скрыть' : 'Развернуть'}
        >
          {list?.length}{' '}
          {i18next.language == 'en' ? 'movies' : getRemainingFilmAmount(list?.length)}
        </Button>
      </div>
      <div className={styles.line}></div>
      <div className={styles.cards}>
        {!isOpen && list?.length > 8 ? (
          <>
            {list?.slice(0, 8).map((card: StaffFilm) => (
              <MovieCard key={card.filmId + card.professionKey} card={card} />
            ))}
            <Text onClick={handleToggle} className={styles.link}>
              {t('buttons.more')} {list?.length - 8}
              {i18next.language == 'en' ? ' movies' : getRemainingFilmAmount(list?.length - 8)}
            </Text>
          </>
        ) : (
          <>
            {list.map((card) => (
              <MovieCard key={card.filmId} card={card} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
