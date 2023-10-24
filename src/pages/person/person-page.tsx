import Head from 'next/head';
import Image from 'next/image';

import { MovieList } from '@/entities/person';
import { BackButton } from '@/features/back-button';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iPerson } from '@/shared/types/kinopoiskTypes';
import { Text, Title } from '@/shared/ui';

import styles from './styles.module.scss';

export const PersonPage = ({ person }: { person: iPerson }) => {
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
