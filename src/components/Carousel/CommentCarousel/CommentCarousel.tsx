import React, { FC } from 'react';
import NextArrow from '@/components/Carousel/Arrows/NextArrow';
import PrevArrow from '@/components/Carousel/Arrows/PrevArrow';
import Slider from 'react-slick';
import CommentCard from '@/components/Comment/CommentCard/CommentCard';
import Loader from '@/components/Loader/Loader';
import { iReviewsItem } from '@/types/kinopoiskTypes';
import styles from '@/components/WatchPage/WatchPage.module.scss';
import { Htag } from '@/components/Htag/Htag';
import Sup from '@/components/Sup/Sup';
import { Button } from '@/components/Button/Button';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { scrollTop } from '@/helpers/scrollTop';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';

interface ICommentCarousel {
  comments: iReviewsItem[];
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
        {comments ? (
          <Slider {...settings}>
            {comments.map((comment) => (
              <CommentCard comment={comment} key={comment.kinopoiskId} />
            ))}
          </Slider>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default CommentCarousel;
