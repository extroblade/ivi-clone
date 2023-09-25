import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Slider, { Settings } from 'react-slick';

import { NextArrow, PrevArrow } from '@/components';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { Button, Title } from '@/newui';
import { scrollTop } from '@/shared/helpers';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { useFetchCommentsQuery } from '@/shared/services';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/shared/store';
import { CommentCard, Loader } from '@/UI';

export const CommentCarousel: FC = () => {
  const { t } = useTranslation();
  const { currentMovie } = useAppSelector(selectModal);
  const {
    data: comments,
    isLoading,
    error,
    refetch,
  } = useFetchCommentsQuery({ id: currentMovie?.kinopoiskId || 0 });
  useEffect(() => {
    if (currentMovie?.kinopoiskId) {
      refetch();
    }
  }, [currentMovie]);
  const settings: Settings = {
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
    if (!comments) {
      return;
    }
    dispatch(setCurrentMovie({ ...currentMovie, comments }));
  }, [dispatch, comments]);
  if (isLoading) return <Loader />;
  if (error) return <></>;

  return (
    <>
      <div className={styles.comments_container}>
        <Title sup={comments?.total || 0} onClick={openComments}>
          {t('categories.comments')}
        </Title>
        <div className={styles.open} onClick={openComments}>
          <Button appearance={'outline'}>{t('buttons.leave-a-comment')}</Button>
        </div>
      </div>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {!isLoading &&
            comments &&
            comments.items.map((comment) => (
              <CommentCard comment={comment} key={comment.kinopoiskId} />
            ))}
        </Slider>
      </div>
    </>
  );
};
