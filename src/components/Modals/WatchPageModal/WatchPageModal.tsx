import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronLeft } from 'react-icons/hi';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { AwardsTab, PersonsTab, TrailersTab, WatchModalInfoCard } from '@/components';
import { useAppDispatch, useAppSelector, usePreventScroll } from '@/hooks';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { selectModal, setShowWatchPageModal } from '@/shared/store';
import { Button, CommentSection, Htag, Sup } from '@/UI';

import styles from './WatchPageModal.module.scss';

export const WatchPageModal: FC = () => {
  const dispatch = useAppDispatch();
  const { currentMovie, showWatchPageModal } = useAppSelector(selectModal);
  const { t, i18n } = useTranslation();
  usePreventScroll(showWatchPageModal);
  const close = () => {
    dispatch(setShowWatchPageModal(false));
  };
  useEscapeKey(close);

  const persons = currentMovie?.persons;
  const enName = currentMovie?.nameEn || currentMovie?.nameOriginal || currentMovie?.nameRu;
  const ruName = currentMovie?.nameRu || currentMovie?.nameOriginal || currentMovie?.nameEn;
  const name = i18n.language == 'en' ? enName : ruName;

  return (
    <>
      {showWatchPageModal && (
        <div className={cn(styles.modal, styles.modal__open)}>
          <Button appearance="transparent" className={styles.back} onClick={() => close()}>
            <HiChevronLeft className={styles.back__icon} />
            <span>{t('buttons.to-movie')}</span>
          </Button>
          <div className={styles.wrap}>
            <Tabs className={styles.tabs} defaultIndex={currentMovie?.index || 0}>
              <Htag tag={'h2'}>{name}</Htag>
              <TabList className={styles.tabs__title}>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  <div className={styles.tab__container}>
                    {t('categories.creators')}{' '}
                    {persons?.length ? <Sup text={persons?.length} /> : ''}
                  </div>
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  <div className={styles.tab__container}>
                    {t('categories.comments')} <Sup text={currentMovie?.comments?.total || 0} />
                  </div>
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  <div className={styles.tab__container}>
                    {t('categories.trailers')} <Sup text={currentMovie?.videos?.total || 0} />
                  </div>
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  <div className={styles.tab__container}>
                    {t('categories.awards')} <Sup text={currentMovie?.awards?.total || 0} />
                  </div>
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
