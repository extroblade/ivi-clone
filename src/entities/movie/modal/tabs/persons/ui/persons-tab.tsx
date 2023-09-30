import React from 'react';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();
  if (isLoading) return <Loader />;
  if (!persons?.length) return <Title>Актеры не указаны</Title>;
  return (
    <>
      <Title tag="h3">{t('categories.actors')}</Title>
      <StaffList persons={persons?.filter((person) => person.professionText == 'Актеры') || []} />
      <Title tag="h3">{t('categories.directors')}</Title>
      <StaffList
        persons={persons?.filter((person) => person.professionText == 'Режиссеры') || []}
      />
    </>
  );
};
