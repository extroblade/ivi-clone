import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import { CommentCard } from '@/features/comment/card/ui/CommentCard';
import { settings } from '@/features/comment/carousel/model/settings';
import { useScrollTop } from '@/features/scroll-to-top/lib';
import { useAppDispatch } from '@/shared/hooks';
import { useFetchCommentsQuery } from '@/shared/services';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store';
import { Button, Loader, Title } from '@/shared/ui';

import styles from './styles.module.scss';

export const CommentCarousel: FC = () => {
  const { t } = useTranslation();
  const scrollTop = useScrollTop();
  const router = useRouter();
  const {
    data: comments,
    isLoading,
    error,
  } = useFetchCommentsQuery({ id: Number(router.query?.id) }, { skip: !router.query?.id });
  const dispatch = useAppDispatch();

  const openComments = () => {
    dispatch(setCurrentTab(1));
    dispatch(setShowWatchPageModal(true));
    scrollTop?.();
  };
  if (isLoading) return <Loader />;
  if (error) return <></>;

  return (
    <div className={styles.carousel}>
      <nav className={styles.nav}>
        <Title className={styles.title} onClick={openComments}>
          {t('categories.comments')}
        </Title>
        <div>
          <Button onClick={openComments} appearance={'outline'}>
            {t('buttons.leave-a-comment')}
          </Button>
        </div>
      </nav>
      <Slider {...settings}>
        {!isLoading &&
          comments?.items.map((comment) => (
            <CommentCard onClick={openComments} comment={comment} key={comment.kinopoiskId} />
          ))}
      </Slider>
    </div>
  );
};
