import Image from 'next/image';
import { FC } from 'react';

import { MovieList } from '@/entities/person/movies/ui/movie-list';
import { BackButton } from '@/features/back-button';
import { Text, Title } from '@/newui';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';

import { PersonProps } from '../model/props';
import styles from './person.module.scss';

export const Person: FC<PersonProps> = ({ person }) => {
  const { posterUrl, profession, films } = person;
  const personName = useLocalizeName(person);
  return (
    <>
      <BackButton />
      <div className={styles.person}>
        <div className={styles.card_image}>
          <Image width={128} height={203} src={posterUrl} alt={personName || 'person'} />
        </div>
        <Title tag={'h1'}>{personName}</Title>
        <Text>{profession || ''}</Text>
        <MovieList list={films} />
      </div>
    </>
  );
};
