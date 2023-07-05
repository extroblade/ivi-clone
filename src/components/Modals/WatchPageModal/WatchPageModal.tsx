import { FC } from 'react';
import cn from 'classnames';
import styles from './WatchPageModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '@/components/Button/Button';
import { HiChevronLeft } from 'react-icons/hi';
import { selectModal, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { useTranslation } from 'react-i18next';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CommentSection from '@/components/Comment/CommentSection';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import Sup from '@/components/Sup/Sup';
import WatchModalInfoCard from '@/components/Modals/WatchPageModal/Tabs/WatchModalInfoCard';
import PersonsTab from '@/components/Modals/WatchPageModal/Tabs/PersonsTab';
import TrailersTab from '@/components/Modals/WatchPageModal/Tabs/TrailersTab';
import AwardsTab from '@/components/Modals/WatchPageModal/Tabs/AwardsTab';

const WatchPageModal: FC = () => {
  const dispatch = useAppDispatch();
  const { currentMovie, showWatchPageModal } = useAppSelector(selectModal);
  const { t, i18n } = useTranslation();
  usePreventScroll(showWatchPageModal);
  const close = () => {
    dispatch(setShowWatchPageModal(false));
  };
  useEscapeKey(close);

  const persons = currentMovie?.persons;

  return (
    <>
      {showWatchPageModal && (
        <div className={cn(styles.modal, styles.modal__open)}>
          <Button appearance="transparent" className={styles.back} onClick={() => close()}>
            <HiChevronLeft className={styles.back__icon} />
            <span>{t('buttons.to-movie')}</span>
          </Button>
          <div className={styles.wrap}>
            <Tabs className={styles.tabs} defaultIndex={currentMovie.index}>
              <Htag tag={'h2'}>
                {i18n.language == 'en' ? currentMovie.enName : currentMovie.name}
              </Htag>
              <TabList className={styles.tabs__title}>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.creators')} {persons?.length ? <Sup text={persons?.length} /> : ''}
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.comments')} <Sup text={currentMovie?.comments?.total} />
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.trailers')} <Sup text={currentMovie?.videos?.total} />
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.awards')} <Sup text={currentMovie?.awards?.total} />
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
            <WatchModalInfoCard />
          </div>
        </div>
      )}
    </>
  );
};

export default WatchPageModal;
