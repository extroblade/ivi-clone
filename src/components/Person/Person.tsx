import { FC } from 'react';
import { P } from '../P/P';
import MovieList from './MoviesList/MovieList';
import { PersonProps } from './Person.props';
import { Htag } from '../Htag/Htag';
import styles from './Person.module.scss';
import BackButton from '../BackButton/BackButton';
import i18next from 'i18next';
import Image from 'next/image';

export const PersonInfo: FC<PersonProps> = ({ person }) => {
  const { posterUrl, nameRu, nameEn, profession, films } = person;

  return (
    <>
      <BackButton />
      <div className={styles.person}>
        <div className={styles.card_image}>
          <Image width={128} height={203} src={posterUrl} alt={nameRu || nameEn} />
        </div>
        <Htag tag={'h1'}>{i18next.language == 'en' ? nameEn || nameRu : nameRu}</Htag>
        <P>{i18next.language == 'en' ? nameEn : nameRu}</P>
        <P color={'gray-light'} className={styles.descr}>
          {profession || ''}
        </P>
        <MovieList list={films} />
      </div>
    </>
  );
};
