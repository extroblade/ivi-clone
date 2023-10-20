import { FC } from 'react';

import { PersonForStaff } from '@/entities/movie/modal/tabs/persons/staff-list/person/person-for-staff';
import { Text } from '@/shared/ui';

import { StaffListProps } from '../model/props';
import styles from './staff-list.module.scss';

export const StaffList: FC<StaffListProps> = ({ persons }) => {
  if (!persons?.length) return <Text>Не указаны!</Text>;
  return (
    <div className={styles.cards}>
      {persons.map((person) => (
        <PersonForStaff person={person} key={person?.staffId + person.professionKey} />
      ))}
    </div>
  );
};
