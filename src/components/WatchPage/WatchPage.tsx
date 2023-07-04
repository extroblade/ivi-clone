import React, { FC, useEffect, useState } from 'react';
import Player from '../Player/Player';
import styles from './WatchPage.module.scss';
import Carousel from '../Carousel/Carousel';
import { WatchPageProps } from './WatchPage.props';
import Card from '@/components/Card/Card';
import { PersonsGallery } from '@/components/WatchPage/PersonsGallery/PersonsGallery';
import i18next from 'i18next';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import MovieInfo from '@/components/WatchPage/MovieInfo/MovieInfo';
import { FastAverageColor } from 'fast-average-color';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import { useTranslation } from 'react-i18next';
import { Htag } from '@/components/Htag/Htag';
import { useFetchCommentsQuery } from '@/services/comments.api';
import Sup from '@/components/Sup/Sup';
import CommentCarousel from '@/components/Carousel/CommentCarousel/CommentCarousel';
import { Button } from '@/components/Button/Button';
import WatchAllDevices from '@/components/WatchPage/WatchAllDevices/WatchAllDevices';
import ScrollToTopButton from '@/components/WatchPage/ScrollToTopButton/ScrollToTopButton';
import MovieTitle from '@/components/WatchPage/MovieInfo/MovieTitle';
import Loader from '@/components/Loader/Loader';

const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { t } = useTranslation();
  const { data: movies, isLoading } = useFetchAllFilmsQuery({ limit: 15 });
  const { data: comments } = useFetchCommentsQuery({ id: movie.kinopoiskId });
  const { currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    dispatch(setCurrentMovie({ ...movie, index: 0 }));
  }, [dispatch, movie.kinopoiskId]);

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

  const openComments = () => {
    dispatch(setCurrentMovie({ ...currentMovie, index: 1 }));
    dispatch(setShowWatchPageModal(true));
  };

  const { nameRu, nameEn, trailer, posterUrl, coverUrl } = movie;

  // const [comment, setComment] = useState([]);
  //
  // useEffect(() => {
  //   if (comments?.length) {
  //     setComment(() => comments.find((com) => com?.id == movie?.kinopoiskId).commentsData);
  //   }
  // }, [comments?.length, movie?.kinopoiskId]);
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
              <Player url={trailer || 'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
            </div>
            <MovieInfo movie={movie} />
          </div>
        </div>
        {isLoading && <Loader />}
        {movies?.length && (
          <Carousel
            title={
              i18next.language == 'en'
                ? `Movies similar to «${nameEn}»`
                : `С фильмом «${nameRu}» смотрят`
            }
            route={'/'}
            showAll={movies?.length > 15}
          >
            {movies.slice(0, 15).map((card) => (
              <Card card={card} book key={card?.id} />
            ))}
          </Carousel>
        )}

        {/*<PersonsGallery list={personsData} />*/}
        <ScrollToTopButton />
        <div className={styles.comments_container}>
          <div className={styles.comments} onClick={openComments}>
            <Htag tag={'h4'}>{t('categories.comments')} </Htag> <Sup text={comments?.length || 0} />
          </div>
          <div className={styles.open} onClick={openComments}>
            <Button appearance={'outline'}>{t('buttons.leave-a-comment')}</Button>
          </div>
        </div>
        {comments?.length ? <CommentCarousel comments={comments} /> : ''}
        <WatchAllDevices name={nameRu} image={coverUrl} />
      </section>
    </>
  );
};

export default WatchPage;
