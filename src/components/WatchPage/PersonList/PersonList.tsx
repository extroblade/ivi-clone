import { FC } from 'react';
import { PersonListProps } from './PersonList.props';

import styles from './PersonList.module.scss';
import PersonCard from './PersonCard/PersonCard';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';

export const PersonList: FC<PersonListProps> = ({ rating }) => {
  const { currentMovie } = useAppSelector(selectModal);

  return (
    <div className={styles.list}>
      <PersonCard rating={rating} />
      {currentMovie?.persons?.length &&
        currentMovie?.persons.slice(0, 4).map((person) => {
          return <PersonCard key={person.staffId} person={person} />;
        })}
    </div>
  );
};
