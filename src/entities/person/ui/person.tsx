import i18next from 'i18next';
import Image from 'next/image';
import { FC } from 'react';

import { MovieList } from '@/entities/person/movies/ui/movie-list';
import { BackButton } from '@/features/back-button';
import { Text, Title } from '@/newui';
import { localizeName } from '@/shared/helpers/localize-name';

import { PersonProps } from '../model/props';
import styles from './person.module.scss';

export const Person: FC<PersonProps> = ({ person }) => {
  const { posterUrl, nameRu, nameEn, profession, films } = person;

  return (
    <>
      <BackButton />
      <div className={styles.person}>
        <div className={styles.card_image}>
          <Image width={128} height={203} src={posterUrl} alt={nameRu || nameEn} />
        </div>
        <Title tag={'h1'}>{localizeName(person)}</Title>
        <Text>{i18next.language == 'en' ? nameEn : nameRu}</Text>
        <Text color={'gray-light'} className={styles.description}>
          {profession || ''}
        </Text>
        <MovieList list={films} />
      </div>
    </>
  );
};
