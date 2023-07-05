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
import {
  useFetchFilmAwardsQuery,
  useFetchFilmFactsQuery,
  useFetchFilmSimilarsQuery,
  useFetchFilmVideoQuery,
} from '@/services/movie.api';
import { useTranslation } from 'react-i18next';
import { Htag } from '@/components/Htag/Htag';
import { useFetchCommentsQuery } from '@/services/comments.api';
import Sup from '@/components/Sup/Sup';
import CommentCarousel from '@/components/Carousel/CommentCarousel/CommentCarousel';
import { Button } from '@/components/Button/Button';
import WatchAllDevices from '@/components/WatchPage/WatchAllDevices/WatchAllDevices';
import ScrollToTopButton from '@/components/WatchPage/ScrollToTopButton/ScrollToTopButton';
import MovieTitle from '@/components/WatchPage/MovieInfo/MovieTitle';
import { useFetchAllPersonsQuery } from '@/services/person.api';
import { scrollTop } from '@/helpers/scrollTop';

const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { t } = useTranslation();
  const { data: comments } = useFetchCommentsQuery({ id: movie.kinopoiskId });
  const { data: persons } = useFetchAllPersonsQuery({ filmId: movie.kinopoiskId });
  const { data: awards } = useFetchFilmAwardsQuery({ id: movie.kinopoiskId });
  const { data: videos } = useFetchFilmVideoQuery({ id: movie.kinopoiskId });
  const { data: facts } = useFetchFilmFactsQuery({ id: movie.kinopoiskId });
  const { data: similar } = useFetchFilmSimilarsQuery({ id: movie.kinopoiskId });
  const { currentMovie } = useAppSelector(selectModal);
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

  const openComments = () => {
    dispatch(setCurrentMovie({ ...currentMovie, index: 1 }));
    dispatch(setShowWatchPageModal(true));
    scrollTop();
  };

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
        {similar?.total && (
          <Carousel
            title={
              i18next.language == 'en'
                ? `Movies similar to «${nameEn || nameRu || ''}»`
                : `С фильмом «${nameRu || ''}» смотрят`
            }
            route={'/'}
            showAll={similar?.total > 15}
          >
            {similar.items.slice(0, 15).map((card) => (
              <Card card={card} info={false} book key={card?.id} />
            ))}
          </Carousel>
        )}

        <PersonsGallery list={persons} />
        <ScrollToTopButton />
        <div className={styles.comments_container}>
          <div className={styles.comments} onClick={openComments}>
            <Htag tag={'h4'}>{t('categories.comments')} </Htag> <Sup text={comments?.total || 0} />
          </div>
          <div className={styles.open} onClick={openComments}>
            <Button appearance={'outline'}>{t('buttons.leave-a-comment')}</Button>
          </div>
        </div>
        {comments?.total ? <CommentCarousel comments={comments.items} /> : ''}
        <WatchAllDevices name={nameRu || nameEn || ''} image={coverUrl || posterUrl} />
      </section>
    </>
  );
};

export default WatchPage;
