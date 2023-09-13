import { FC } from 'react';

import { PersonCard } from '@/components';
import { useAppSelector } from '@/hooks';
import { selectModal } from '@/store';
import { iStaff } from '@/types/kinopoiskTypes';

import styles from './PersonList.module.scss';
import { PersonListProps } from './PersonList.props';

export const PersonList: FC<PersonListProps> = ({ rating }) => {
  const { currentMovie } = useAppSelector(selectModal);

  return (
    <div className={styles.list}>
      <PersonCard rating={rating} />
      {currentMovie?.persons?.length &&
        currentMovie?.persons.slice(0, 4).map((person: iStaff | undefined) => {
          return <PersonCard key={person?.staffId} person={person} />;
        })}
    </div>
  );
};
