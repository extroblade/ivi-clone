import React from 'react';
import { useTranslation } from 'react-i18next';

import { StaffList } from '@/components/Modals/WatchPageModal/Tabs/StaffList';
import { useAppSelector } from '@/hooks';
import { selectModal } from '@/store';
import { Htag } from '@/UI';

export const PersonsTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const { t } = useTranslation();
  const persons = currentMovie?.persons;
  const actors = persons.filter((person) => person.professionText == 'Актеры');
  const directors = persons.filter((person) => person.professionText == 'Режиссеры');
  return (
    <>
      <Htag tag="h3">{t('categories.actors')}</Htag>
      <StaffList persons={actors} />
      <Htag tag="h3">{t('categories.directors')}</Htag>
      <StaffList persons={directors} />
    </>
  );
};
