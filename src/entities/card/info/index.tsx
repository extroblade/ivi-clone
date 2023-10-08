import dayjs from 'dayjs';
import { FC } from 'react';

import { CardProps } from '@/entities/card';
import { BarGraph, Text, Title } from '@/newui';

export const CardInfo: FC<CardProps> = ({ card }) => {
  const { countries, genres, year, filmLength, ratingKinopoisk } = card || {};
  if (!card?.posterUrl) return <div className={'loader'} />;
  return (
    <>
      <Title>{ratingKinopoisk || 5}</Title>
      <BarGraph width={Number(ratingKinopoisk || 5) * 10} />
      <Text size={'S'} color={'gray-light'}>
        {year && `${year}, `}
        {countries?.length && `${countries[0].country}, `}
        {genres?.length && `${genres[0]?.genre}`}
        {filmLength && dayjs.duration(filmLength, 'minutes').format('H часа mm минут')}
      </Text>
    </>
  );
};
