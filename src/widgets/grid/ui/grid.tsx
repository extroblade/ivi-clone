import { FC, useRef } from 'react';

import { FetchError } from '@/entities/error';
import { FilmTypeVariants } from '@/shared/types/kinopoiskTypes';
import { Grid as UIGrid, Loader, Title } from '@/shared/ui';
import { CardWithProps } from '@/widgets/cards';

import { useMovie } from '../model/use-movie';
import styles from './grid.module.scss';

export const Grid: FC<{ type: FilmTypeVariants }> = ({ type }) => {
  const buttonRef = useRef(null);
  const { isNothingFound, isLoader, movies, showMoreButton, error } = useMovie(type, buttonRef);

  if (error) {
    return <FetchError error={error} />;
  }
  return (
    <>
      {isLoader && <Loader />}
      <UIGrid>
        {movies?.map((card, index) => (
          <CardWithProps card={card} key={index} />
        ))}
      </UIGrid>
      <div className={styles.nodata}>
        {isNothingFound && <Title tag={'h2'}>Ничего не найдено</Title>}
      </div>
      <div ref={buttonRef}>{showMoreButton()}</div>
    </>
  );
};
