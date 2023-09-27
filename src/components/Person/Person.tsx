import i18next from 'i18next';
import Image from 'next/image';
import { FC } from 'react';

import { MovieList } from '@/components';
import { BackButton } from '@/features/back-button';
import { Text, Title } from '@/newui';

import styles from './Person.module.scss';
import { PersonProps } from './Person.props';

export const PersonInfo: FC<PersonProps> = ({ person }) => {
  const { posterUrl, nameRu, nameEn, profession, films } = person;

  return (
    <>
      <BackButton />
      <div className={styles.person}>
        <div className={styles.card_image}>
          <Image width={128} height={203} src={posterUrl} alt={nameRu || nameEn} />
        </div>
        <Title tag={'h1'}>{i18next.language == 'en' ? nameEn || nameRu : nameRu}</Title>
        <Text>{i18next.language == 'en' ? nameEn : nameRu}</Text>
        <Text color={'gray-light'} className={styles.description}>
          {profession || ''}
        </Text>
        <MovieList list={films} />
      </div>
    </>
  );
};
