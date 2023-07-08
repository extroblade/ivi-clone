import React, { FC, useEffect, useState } from 'react';
import Player from '../../UI/Player/Player';
import styles from './WatchPage.module.scss';
import { WatchPageProps } from './WatchPage.props';
import { PersonsGallery } from '@/components/WatchPage/PersonsGallery/PersonsGallery';
import { setCurrentMovie } from '@/store/reducers/modals.slice';
import { useAppDispatch } from '@/hooks/redux';
import MovieInfo from '@/UI/MovieInfo/MovieInfo';
import { FastAverageColor } from 'fast-average-color';
import {
  useFetchFilmAwardsQuery,
  useFetchFilmFactsQuery,
  useFetchFilmSimilarsQuery,
  useFetchFilmVideoQuery,
} from '@/services/movie.api';
import { Htag } from '@/UI/Htag/Htag';
import { useFetchCommentsQuery } from '@/services/comments.api';
import CommentCarousel from '@/UI/Carousel/CommentCarousel/CommentCarousel';
import WatchAllDevices from '@/components/WatchPage/WatchAllDevices/WatchAllDevices';
import ScrollToTopButton from '@/UI/ScrollToTopButton/ScrollToTopButton';
import MovieTitle from '@/UI/MovieInfo/MovieTitle';
import { useFetchAllPersonsQuery } from '@/services/person.api';
import SimilarMovies from '@/components/WatchPage/SimilarMovies';
import Trailers from '@/components/WatchPage/Trailers/Trailers';

const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { data: comments } = useFetchCommentsQuery({ id: movie.kinopoiskId });
  const { data: persons } = useFetchAllPersonsQuery({ filmId: movie.kinopoiskId });
  const { data: awards } = useFetchFilmAwardsQuery({ id: movie.kinopoiskId });
  const { data: videos } = useFetchFilmVideoQuery({ id: movie.kinopoiskId });
  const { data: facts } = useFetchFilmFactsQuery({ id: movie.kinopoiskId });
  const { data: similar } = useFetchFilmSimilarsQuery({ id: movie.kinopoiskId });
  const dispatch = useAppDispatch();

  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    dispatch(setCurrentMovie({ ...movie, persons, comments, awards, videos, facts, index: 0 }));
  }, [dispatch, movie.kinopoiskId, persons, comments, awards, videos, facts]);
  useEffect(() => {
    const fac = new FastAverageColor();
    if (movie?.coverUrl) {
      fac
        .getColorAsync(movie.coverUrl, {
          algorithm: 'simple',
        })
        .then((color) => {
          setBgColor(() => color.hex);
        });
    }
  }, [dispatch, movie]);

  const { nameRu, nameEn, posterUrl, coverUrl } = movie;
  return (
    <>
      <div
        className={styles.bg_container}
        style={{
          background: `linear-gradient(${bgColor} 0%, transparent 100%)`,
        }}
      />
      <section className={styles.watch}>
        <div className={styles.watch__content}>
          <div className={styles.watch__row}>
            <div className={styles.mobile_title}>
              <MovieTitle enFilmName={nameEn} filmName={nameRu} />
            </div>
            <div className={styles.watch__player}>
              {!videos?.items[0]?.url && <Htag tag={'h3'}>Трейлер не добавлен</Htag>}
              <Player
                url={videos?.items[0]?.url || 'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
                actions
              />
            </div>
            <MovieInfo />
          </div>
        </div>
        <SimilarMovies similar={similar} />

        <PersonsGallery list={persons} />
        <ScrollToTopButton />
        {comments?.total ? <CommentCarousel comments={comments} /> : ''}

        <Trailers videos={videos} />
        <WatchAllDevices name={nameRu || nameEn || ''} image={coverUrl || posterUrl} />
      </section>
    </>
  );
};

export default WatchPage;
