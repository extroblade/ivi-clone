import React from 'react';
import { useTranslation } from 'react-i18next';

import { StaffList } from '@/components/Modals/WatchPageModal/Tabs/StaffList';
import { Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';

export const PersonsTab = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const persons = currentMovie?.persons || [];
  const { t } = useTranslation();

  const actors = persons?.length && persons.filter((person) => person.professionText == 'Актеры');
  const directors =
    persons?.length && persons.filter((person) => person.professionText == 'Режиссеры');

  return (
    <>
      <Title tag="h3">{t('categories.actors')}</Title>
      <StaffList persons={actors || []} />
      <Title tag="h3">{t('categories.directors')}</Title>
      <StaffList persons={directors || []} />
    </>
  );
};
