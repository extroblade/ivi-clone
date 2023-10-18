import { Card, CardProps } from '@/entities/card';
import { CardInfo } from '@/entities/card/info';
import { AddToFavoritesButton } from '@/features/add-movie-to-favorites';
import { BlockButton } from '@/features/block-movie';
import { FindSimilarButton } from '@/features/find-similar-movie';
import { RateButton } from '@/features/rate-button';

export const CardWithProps = ({ card }: CardProps) => {
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
