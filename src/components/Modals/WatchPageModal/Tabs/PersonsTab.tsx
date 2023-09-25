import React from 'react';
import { useTranslation } from 'react-i18next';

import { StaffList } from '@/components/Modals/WatchPageModal/Tabs/StaffList';
import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';
import { Htag } from '@/UI';

export const PersonsTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const persons = currentMovie?.persons || [];
  const { t } = useTranslation();

  const actors = persons?.length && persons.filter((person) => person.professionText == 'Актеры');
  const directors =
    persons?.length && persons.filter((person) => person.professionText == 'Режиссеры');

  return (
    <>
      <Htag tag="h3">{t('categories.actors')}</Htag>
      <StaffList persons={actors || []} />
      <Htag tag="h3">{t('categories.directors')}</Htag>
      <StaffList persons={directors || []} />
    </>
  );
};
