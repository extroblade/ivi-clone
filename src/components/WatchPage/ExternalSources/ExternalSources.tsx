import React, { useEffect } from 'react';
import { useFetchFilmExternalSourcesQuery } from '@/services/movie.api';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { P } from '@/UI/P/P';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ExternalSources.module.scss';
import Title from '@/UI/Title/Title';
const ExternalSources = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const params = { id: currentMovie?.kinopoiskId };
  const { data: sources, refetch } = useFetchFilmExternalSourcesQuery({ ...params });
  useEffect(() => {
    if (currentMovie?.kinopoiskId) {
      refetch();
    }
  }, [currentMovie]);
  return (
    <div className={styles.sources_container}>
      <Title text={'Смотреть полностью:'} />
      <div className={styles.sources}>
        {params.id && sources?.total
          ? sources.items.map((item) => (
              <Link href={item.url} key={item.platform} className={styles.source_item}>
                <div className={styles.img}>
                  <Image fill alt={'logo'} src={item.logoUrl} />
                </div>
                <div className={styles.text}>
                  <P color={'gray-light'}>{item.platform}</P>
                </div>
              </Link>
            ))
          : ''}
      </div>
    </div>
  );
};

export default ExternalSources;
