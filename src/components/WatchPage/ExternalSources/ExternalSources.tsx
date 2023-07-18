import React, { useEffect } from 'react';
import { useFetchFilmExternalSourcesQuery } from '@/services/movie.api';
import { useAppSelector } from '@/hooks/redux';
import { selectModal } from '@/store/reducers/modals.slice';
import { P } from '@/UI/P/P';
import Image from 'next/image';
import Link from 'next/link';
const ExternalSources = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const params = { id: currentMovie?.kinopoiskId };
  const { data, refetch } = useFetchFilmExternalSourcesQuery({ ...params });
  useEffect(() => {
    if (currentMovie?.kinopoiskId) {
      refetch();
      console.log(currentMovie?.kinopoiskId);
    }
  }, [currentMovie]);
  return (
    <div>
      {params.id && data?.total
        ? data.items.map((item) => (
            <Link href={item.url} key={item.platform}>
              <div>
                <Image width={120} height={120} alt={'logo'} src={item.logoUrl} />
              </div>

              <P>{item.platform}</P>
            </Link>
          ))
        : ''}
    </div>
  );
};

export default ExternalSources;
