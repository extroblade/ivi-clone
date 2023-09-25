import Image from 'next/image';
import React from 'react';

import { Text, Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';
import { iAwardsItem } from '@/shared/types/kinopoiskTypes';

export const AwardsTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const awards = currentMovie?.awards?.items;
  return (
    <div>
      {awards?.length ? (
        awards.map((award: iAwardsItem) => (
          <div key={award.name}>
            <Title tag={'h3'}>{award.name}</Title>
            <Text>{award.nominationName}</Text>
            <Image src={award.imageUrl} width={100} height={100} alt={award.name} />
          </div>
        ))
      ) : (
        <Title tag={'h2'}>Награды не указаны</Title>
      )}
    </div>
  );
};
