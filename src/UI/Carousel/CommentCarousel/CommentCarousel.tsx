import React, { FC } from 'react';
import NextArrow from '@/UI/Carousel/Arrows/NextArrow';
import PrevArrow from '@/UI/Carousel/Arrows/PrevArrow';
import Slider from 'react-slick';
import CommentCard from '@/UI/Comment/CommentCard/CommentCard';
import Loader from '@/UI/Loader/Loader';
import { iReviews } from '@/types/kinopoiskTypes';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { Htag } from '@/UI/Htag/Htag';
import Sup from '@/UI/Sup/Sup';
import { Button } from '@/UI/Button/Button';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { scrollTop } from '@/helpers/scrollTop';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';

interface ICommentCarousel {
  comments: iReviews;
}

const CommentCarousel: FC<ICommentCarousel> = ({ comments }) => {
  const { t } = useTranslation();

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
  const { currentMovie } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const openComments = () => {
    dispatch(setCurrentMovie({ ...currentMovie, index: 1 }));
    dispatch(setShowWatchPageModal(true));
    scrollTop();
  };

  if (!comments) return <Loader />;
  if (!comments?.total) return;

  return (
    <>
      <div className={styles.comments_container}>
        <div className={styles.comments} onClick={openComments}>
          <Htag tag={'h4'}>{t('categories.comments')} </Htag> <Sup text={comments?.total || 0} />
        </div>
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
