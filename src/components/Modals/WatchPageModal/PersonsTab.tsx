import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { Htag } from '@/components/Htag/Htag';
import StaffList from '@/components/Modals/WatchPageModal/StaffList';

const PersonsTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const { t } = useTranslation();
  const persons = currentMovie?.persons;
  return (
    <>
      <Htag tag="h3">{t('categories.actors')}</Htag>
      <StaffList persons={persons.filter((person) => person.professionText == 'Актеры')} />
      <Htag tag="h3">{t('categories.directors')}</Htag>
      <StaffList persons={persons.filter((person) => person.professionText == 'Режиссеры')} />
    </>
  );
};

export default PersonsTab;
