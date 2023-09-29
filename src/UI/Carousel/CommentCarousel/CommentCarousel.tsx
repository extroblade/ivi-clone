import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Slider, { Settings } from 'react-slick';

import { NextArrow } from '@/components/Buttons/Arrows/NextArrow';
import { PrevArrow } from '@/components/Buttons/Arrows/PrevArrow';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Button, Loader, Title } from '@/newui';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { useFetchCommentsQuery } from '@/shared/services';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/shared/store';
import { CommentCard } from '@/UI';

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

export const CommentCarousel: FC = () => {
  const { t } = useTranslation();
  const { currentMovie } = useAppSelector(selectModal);
  const scrollTop = useScrollTop();
  const {
    data: comments,
    isLoading,
    error,
  } = useFetchCommentsQuery(
    { id: currentMovie?.kinopoiskId || 0 },
    { skip: !currentMovie?.kinopoiskId }
  );
  const dispatch = useAppDispatch();

  const openComments = () => {
    dispatch(setCurrentMovie({ ...currentMovie, index: 1 }));
    dispatch(setShowWatchPageModal(true));
    scrollTop?.();
  };
  if (isLoading) return <Loader />;
  if (error) return <></>;

  return (
    <>
      <div className={styles.comments_container}>
        <Title onClick={openComments}>{t('categories.comments')}</Title>
        <div className={styles.open} onClick={openComments}>
          <Button appearance={'outline'}>{t('buttons.leave-a-comment')}</Button>
        </div>
      </div>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {!isLoading &&
            comments?.items.map((comment) => (
              <CommentCard comment={comment} key={comment.kinopoiskId} />
            ))}
        </Slider>
      </div>
    </>
  );
};
