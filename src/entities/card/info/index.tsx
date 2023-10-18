import { FC } from 'react';

import { Props } from '@/entities/card';
import { BarGraph, Text, Title } from '@/shared/ui';

export const CardInfo: FC<Props> = ({ card }) => {
  const { countries, genres, year, ratingKinopoisk } = card || {};
  if (!card) return <div className={'loader'} />;
  return (
    <>
      <Title>{ratingKinopoisk || 5}</Title>
      <BarGraph width={Number(ratingKinopoisk || 5) * 10} />
      <Text size={'S'} color={'gray-light'}>
        {year && `${year}, `}
        {countries?.length && `${countries[0].country}, `}
        {genres?.length && `${genres[0]?.genre}`}
      </Text>
    </>
  );
};
