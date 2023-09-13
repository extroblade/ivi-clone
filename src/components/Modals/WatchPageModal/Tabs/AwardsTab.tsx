import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { Htag } from '@/UI/Htag/Htag';
import Image from 'next/image';
import { P } from '@/UI/P/P';

const AwardsTab = () => {
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

export default AwardsTab;
