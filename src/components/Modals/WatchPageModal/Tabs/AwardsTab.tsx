import Image from 'next/image';
import React from 'react';

import { Text } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';
import { iAwardsItem } from '@/shared/types/kinopoiskTypes';
import { Htag } from '@/UI';

export const AwardsTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const awards = currentMovie?.awards?.items;
  return (
    <div>
      {awards?.length ? (
        awards.map((award: iAwardsItem) => (
          <div key={award.name}>
            <Htag tag={'h3'}>{award.name}</Htag>
            <Text>{award.nominationName}</Text>
            <Image src={award.imageUrl} width={100} height={100} alt={award.name} />
          </div>
        ))
      ) : (
        <Htag tag={'h2'}>Награды не указаны</Htag>
      )}
    </div>
  );
};
