import React, { FC, useEffect, useState } from 'react';
import Player from '../Player/Player';
import styles from './WatchPage.module.scss';
import Carousel from '../Carousel/Carousel';
import { WatchPageProps } from './WatchPage.props';
import Card from '@/components/Card/Card';
import { PersonsGallery } from '@/components/WatchPage/PersonsGallery/PersonsGallery';
import i18next from 'i18next';
import { selectModal, setPersonItems, setShowPersonsModal } from '@/store/reducers/modals.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import MovieInfo from '@/components/WatchPage/MovieInfo/MovieInfo';
import { FastAverageColor } from 'fast-average-color';
import { useFetchAllFilmsQuery } from '@/services/movie.api';
import { useTranslation } from 'react-i18next';
import { Htag } from '@/components/Htag/Htag';
import { useFetchAllPersonsQuery } from '@/services/person.api';
import { useFetchAllCommentsQuery } from '@/services/comments.api';
import Sup from '@/components/Sup/Sup';
import CommentCarousel from '@/components/Carousel/CommentCarousel/CommentCarousel';
import { Button } from '@/components/Button/Button';
import WatchAllDevices from '@/components/WatchPage/WatchAllDevices/WatchAllDevices';
import ScrollToTopButton from '@/components/WatchPage/ScrollToTopButton/ScrollToTopButton';
import MovieTitle from '@/components/WatchPage/MovieInfo/MovieTitle';

const WatchPage: FC<WatchPageProps> = ({ movie }) => {
  const { data: movies, error, isLoading } = useFetchAllFilmsQuery({ limit: 15 });
  const { data: persons } = useFetchAllPersonsQuery();
  const { personModalItem } = useAppSelector(selectModal);
  const [personsData, setPersonsData] = useState([]);

  useEffect(() => {
    if (persons?.length) {
      const set = new Set(movie.persons);
      const temp = persons.filter((person) => set.has(person.id));
      setPersonsData(() => temp);
    }
  }, [persons?.length]);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [bgColor, setBgColor] = useState('');
  useEffect(() => {
    dispatch(setPersonItems({ ...movie, index: 0 }));
  }, [dispatch, movie.id]);

  useEffect(() => {
    const fac = new FastAverageColor();
    if (movie.card_image) {
      fac
        .getColorAsync(movie.card_image, {
          algorithm: 'simple',
        })
        .then((color) => {
          setBgColor(() => color.hex);
        });
    }
  }, [dispatch, movie]);

  const openComments = () => {
    dispatch(setPersonItems({ ...personModalItem, index: 1 }));
    dispatch(setShowPersonsModal(true));
  };

  const { title, originalTitle, name, enName, trailer, card_image } = movie;
  const filmName = title || name || null;
  const enFilmName = originalTitle || enName || null;

  const { data: comments } = useFetchAllCommentsQuery();

  const [comment, setComment] = useState([]);

  useEffect(() => {
    if (comments?.length) {
      setComment(() => comments.find((com) => com?.id == movie?.id).commentsData);
    }
  }, [comments?.length, movie?.id]);

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
              <MovieTitle enFilmName={enFilmName} filmName={filmName} />
            </div>
            <div className={styles.watch__player}>
              <Player url={trailer || 'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
            </div>
            <MovieInfo movie={movie} persons={personsData} />
          </div>
        </div>
        <Carousel
          title={
            i18next.language == 'en'
              ? `Movies similar to «${enFilmName || filmName}»`
              : `С фильмом «${filmName}» смотрят`
          }
          route={'/'}
          showAll
        >
          {!isLoading && !error && movies.map((card) => <Card card={card} book key={card?.id} />)}
        </Carousel>
        <PersonsGallery list={personsData} />
        <ScrollToTopButton />
        <div className={styles.comments_container}>
          <div className={styles.comments} onClick={openComments}>
            <Htag tag={'h4'}>{t('categories.comments')} </Htag> <Sup text={comment?.length || 0} />
          </div>
          <div className={styles.open} onClick={openComments}>
            <Button appearance={'outline'}>{t('buttons.leave-a-comment')}</Button>
          </div>
        </div>
        {comment?.length ? <CommentCarousel comments={comment} /> : ''}
        <WatchAllDevices name={filmName || 'фильм'} image={card_image} />
      </section>
    </>
  );
};

export default WatchPage;
