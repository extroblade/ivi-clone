import Head from 'next/head';
import Image from 'next/image';
import React, { FC } from 'react';

import { MovieList } from '@/entities/person/movies/ui/movie-list';
import { BackButton } from '@/features/back-button';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { Text, Title } from '@/shared/ui';

import { PersonProps } from '../model/props';
import styles from './person.module.scss';

export const Person: FC<PersonProps> = ({ person }) => {
  const { posterUrl, profession, films } = person;
  const personName = useLocalizeName(person);
  return (
    <>
      <Head>
        <title>{personName}</title>
      </Head>
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
