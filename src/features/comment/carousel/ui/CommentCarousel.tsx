import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { CommentCard } from '@/features/comment/card/ui/CommentCard';
import { settings } from '@/features/comment/carousel/model/settings';
import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Button, Loader, Title } from '@/newui';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { useFetchCommentsQuery } from '@/shared/services';
import { selectModal, setCurrentTab, setShowWatchPageModal } from '@/shared/store';
import styles from '@/widgets/movie/ui/WatchPage.module.scss';

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
    dispatch(setCurrentTab(1));
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
              <CommentCard onClick={openComments} comment={comment} key={comment.kinopoiskId} />
            ))}
        </Slider>
      </div>
    </>
  );
};
