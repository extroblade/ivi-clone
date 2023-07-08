import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { Htag } from '@/UI/Htag/Htag';

const AwardsTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const awards = currentMovie?.awards?.items;
  return (
    <div>
      {awards?.length ? (
        awards.map((award) => <div key={award}>{award}</div>)
      ) : (
        <Htag tag={'h2'}>Награды не указаны</Htag>
      )}
    </div>
  );
};

export default AwardsTab;
