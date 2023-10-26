import { AddToFavoritesButton } from 'src/features/buttons/add-movie-to-favorites';

import { Card } from '@/entities/card';
import { CardInfo } from '@/entities/card/ui/card-info';
import { BlockButton } from '@/features/buttons/block-movie';
import { FindSimilarButton } from '@/features/buttons/find-similar-movie';
import { RateButton } from '@/features/buttons/rate-movie';
import { iFilm } from '@/shared/types/kinopoiskTypes';

export const CardWithProps = ({ card }: { card: Partial<iFilm> }) => {
  return (
    <Card
      buttons={
        <>
          <AddToFavoritesButton />
          <FindSimilarButton id={card.kinopoiskId} />
          <RateButton />
          <BlockButton />
        </>
      }
      info={<CardInfo card={card} />}
      card={card}
    />
  );
};
