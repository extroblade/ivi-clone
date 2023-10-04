import React from 'react';

import { Loader, Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { useFetchAllPersonsQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';

import { StaffList } from '../staff-list';

export const PersonsTab = () => {
  const { currentMovie, showWatchPageModal } = useAppSelector(selectModal);
  const { data: persons, isLoading } = useFetchAllPersonsQuery(
    { filmId: currentMovie?.kinopoiskId || 0 },
    { skip: !showWatchPageModal || !currentMovie?.kinopoiskId }
  );
  if (isLoading) return <Loader />;
  if (!persons?.length) return <Title>Актеры не указаны</Title>;
  return (
    <StaffList
      persons={[...persons]?.sort((a, b) => a.professionText.localeCompare(b.professionText)) || []}
    />
  );
};
