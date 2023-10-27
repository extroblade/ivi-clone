import { iPerson } from '@/shared/types/kinopoiskTypes';
import { Text } from '@/shared/ui';

import { PersonForStaff } from '../person/person-for-staff';
import styles from './staff-list.module.scss';

export const StaffList = ({ persons }: { persons: iPerson[] }) => {
  if (!persons?.length) return <Text>Не указаны!</Text>;
  return (
    <div className={styles.cards}>
      {persons.map((person) => (
        <PersonForStaff person={person} key={person?.staffId + person.professionKey} />
      ))}
    </div>
  );
};
