import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronLeft } from 'react-icons/hi';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { Button, Title } from '@/newui';
import { localizeName } from '@/shared/helpers/localize-name';
import { useAppDispatch, useAppSelector, usePreventScroll } from '@/shared/hooks';
import { useEscapeKey } from '@/shared/hooks/useEscapeKey';
import { selectModal, setShowWatchPageModal } from '@/shared/store';
import { CommentSection } from '@/UI';

import { MovieModalInfo } from '../info';
import { AwardsTab, PersonsTab, TrailersTab } from '../tabs';
import styles from './movie-modal.module.scss';

export const MovieModal: FC = () => {
  const dispatch = useAppDispatch();
  const { currentMovie, showWatchPageModal } = useAppSelector(selectModal);
  const { t } = useTranslation();
  usePreventScroll(showWatchPageModal);
  const handleClose = () => {
    dispatch(setShowWatchPageModal(false));
  };
  useEscapeKey(handleClose);
  if (!currentMovie || !showWatchPageModal) return <></>;
  return (
    <div className={cn(styles.modal, styles.modal__open)}>
      <Button appearance="transparent" className={styles.back} onClick={handleClose}>
        <HiChevronLeft className={styles.back__icon} />
        <span>{t('buttons.to-movie')}</span>
      </Button>
      <div className={styles.wrap}>
        <Tabs className={styles.tabs} defaultIndex={currentMovie?.index || 0}>
          <Title tag={'h2'}>{localizeName(currentMovie)}</Title>
          <TabList className={styles.tabs__title}>
            <Tab className={styles.tab} selectedClassName={styles.active}>
              <div className={styles.tab__container}>{t('categories.creators')} </div>
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.active}>
              <div className={styles.tab__container}>{t('categories.comments')}</div>
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.active}>
              <div className={styles.tab__container}>{t('categories.trailers')}</div>
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.active}>
              <div className={styles.tab__container}>{t('categories.awards')}</div>
            </Tab>
          </TabList>

          <TabPanel className={styles.tabs__content}>
            <PersonsTab />
          </TabPanel>
          <TabPanel className={styles.tabs__content}>
            <CommentSection />
          </TabPanel>
          <TabPanel className={styles.tabs__content}>
            <TrailersTab />
          </TabPanel>
          <TabPanel className={styles.tabs__content}>
            <AwardsTab />
          </TabPanel>
        </Tabs>
        <MovieModalInfo />
      </div>
    </div>
  );
};
