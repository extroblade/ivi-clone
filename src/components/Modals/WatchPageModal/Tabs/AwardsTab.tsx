import Image from 'next/image';
import React from 'react';

import { useAppSelector } from '@/hooks';
import { selectModal } from '@/shared/store';
import { Htag, P } from '@/UI';

export const AwardsTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const awards = currentMovie?.awards?.items;
  return (
    <div>
      {awards?.length ? (
        awards.map((award: Record<string, string>) => (
          <div key={award.name}>
            <Htag tag={'h3'}>{award.name}</Htag>
            <P>{award.nominationName}</P>
            <Image src={award.imageUrl} width={100} height={100} alt={award.name} />
          </div>
        ))
      ) : (
        <Htag tag={'h2'}>Награды не указаны</Htag>
      )}
    </div>
  );
};
