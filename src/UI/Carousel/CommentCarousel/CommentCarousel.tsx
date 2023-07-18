import React, { FC, useEffect } from 'react';
import NextArrow from '@/components/Buttons/ArrowButtons/NextArrow';
import PrevArrow from '@/components/Buttons/ArrowButtons/PrevArrow';
import Slider from 'react-slick';
import CommentCard from '@/UI/Comment/CommentCard/CommentCard';
import Loader from '@/UI/Loader/Loader';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { Button } from '@/UI/Button/Button';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { scrollTop } from '@/helpers/scrollTop';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';
import { useFetchCommentsQuery } from '@/services/movie.api';
import Title from '@/UI/Title/Title';

const CommentCarousel: FC = () => {
  const { t } = useTranslation();
  const { currentMovie } = useAppSelector(selectModal);
  const {
    data: comments,
    isLoading,
    error,
    refetch,
  } = useFetchCommentsQuery({ id: currentMovie?.kinopoiskId });
  useEffect(() => {
    if (currentMovie?.kinopoiskId) {
      refetch();
    }
  }, [currentMovie]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    draggable: true,
    lazyLoad: 'progressive',
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const dispatch = useAppDispatch();

  const openComments = () => {
    dispatch(setCurrentMovie({ ...currentMovie, index: 1 }));
    dispatch(setShowWatchPageModal(true));
    scrollTop();
  };
  useEffect(() => {
    dispatch(setCurrentMovie({ ...currentMovie, comments }));
  }, [dispatch, comments]);
  if (isLoading) return <Loader />;
  if (error?.error) return <></>;

  return (
    <>
      <div className={styles.comments_container}>
        <Title text={t('categories.comments')} sup={comments?.total || 0} onClick={openComments} />
        <div className={styles.open} onClick={openComments}>
          <Button appearance={'outline'}>{t('buttons.leave-a-comment')}</Button>
        </div>
      </div>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {comments.items.map((comment) => (
            <CommentCard comment={comment} key={comment.kinopoiskId} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CommentCarousel;
