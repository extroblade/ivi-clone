import React, { FC, useEffect } from 'react';
import Player from '../../UI/Player/Player';
import styles from './WatchPage.module.scss';
import { WatchPageProps } from './WatchPage.props';
import { PersonsGallery } from '@/components/WatchPage/PersonsGallery/PersonsGallery';
import { setCurrentMovie } from '@/store/reducers/modals.slice';
import { useAppDispatch } from '@/hooks/redux';
import MovieInfo from '@/UI/MovieInfo/MovieInfo';
import {
  useFetchFilmAwardsQuery,
  useFetchFilmSimilarsQuery,
  useFetchFilmVideoQuery,
} from '@/services/movie.api';
import CommentCarousel from '@/UI/Carousel/CommentCarousel/CommentCarousel';
import WatchAllDevices from '@/components/WatchPage/WatchAllDevices/WatchAllDevices';
import ScrollToTopButton from '@/UI/ScrollToTopButton/ScrollToTopButton';
import MovieTitle from '@/UI/MovieInfo/MovieTitle';
import { useFetchAllPersonsQuery } from '@/services/person.api';
import SimilarMovies from '@/components/WatchPage/SimilarMovies';
import Trailers from '@/components/WatchPage/Trailers/Trailers';
import BGContainer from '@/UI/MovieBGContainer/MovieBGContainer';

const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { data: persons } = useFetchAllPersonsQuery({ filmId: movie.kinopoiskId });
  const { data: awards } = useFetchFilmAwardsQuery({ id: movie.kinopoiskId });
  const { data: videos } = useFetchFilmVideoQuery({ id: movie.kinopoiskId });
  const { data: similar } = useFetchFilmSimilarsQuery({ id: movie.kinopoiskId });

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentMovie({ ...movie, persons, awards, videos, index: 0 }));
  }, [dispatch, movie.kinopoiskId, persons, awards, videos]);

  const { kinopoiskId, nameRu, nameEn, nameOriginal, posterUrl, coverUrl } = movie;
  const title = nameRu || nameEn || nameOriginal || '';
  const cover = coverUrl || posterUrl || '';
  const trailerYT = videos?.items.find((video) => video.site == 'YOUTUBE')?.url || null;
  return (
    <>
      <BGContainer movie={movie} />
      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.mobile_title}>
              <MovieTitle enFilmName={nameEn || nameOriginal} filmName={nameRu || nameOriginal} />
            </div>
            <div className={styles.watch__player}>
              <Player url={trailerYT} actions />
            </div>
            <MovieInfo />
          </div>
        </div>
        <SimilarMovies similar={similar} />
        <PersonsGallery list={persons} />
        <ScrollToTopButton />
        <CommentCarousel commentsId={kinopoiskId} />
        <Trailers videos={videos} />
        <WatchAllDevices name={title} image={cover} />
      </section>
    </>
  );
};

export default WatchPage;
