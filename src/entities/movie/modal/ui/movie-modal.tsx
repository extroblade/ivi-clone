import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronLeft } from 'react-icons/hi';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { tabs } from '@/entities/movie/modal/model/tabs';
import { Button, Title } from '@/newui';
import { localizeName } from '@/shared/helpers/localize-name';
import { useAppDispatch, useAppSelector, usePreventScroll } from '@/shared/hooks';
import { useEscapeKey } from '@/shared/hooks/useEscapeKey';
import { selectModal, setShowWatchPageModal } from '@/shared/store';

import { MovieModalInfo } from '../info';
import styles from './movie-modal.module.scss';

export const MovieModal: FC = () => {
  const dispatch = useAppDispatch();
  const { currentMovie, currentTab, showWatchPageModal } = useAppSelector(selectModal);
  const { t } = useTranslation();
  const handleClose = () => {
    dispatch(setShowWatchPageModal(false));
  };
  usePreventScroll(showWatchPageModal);
  useEscapeKey(handleClose);
  if (!currentMovie || !showWatchPageModal) return <></>;
  return (
    <div className={styles.modal}>
      <Button appearance="transparent" className={styles.back} onClick={handleClose}>
        <HiChevronLeft className={styles.back__icon} />
        <span>{t('buttons.to-movie')}</span>
      </Button>
      <div className={styles.wrap}>
        <Tabs className={styles.tabs} defaultIndex={currentTab}>
          <Title tag={'h2'}>{localizeName(currentMovie)}</Title>
          <TabList className={styles.tabs__title}>
            {tabs.map(({ title }, index) => (
              <Tab key={index} className={styles.tab} selectedClassName={styles.active}>
                <div className={styles.tab__container}>{t(title)} </div>
              </Tab>
            ))}
          </TabList>
          {tabs.map(({ element }, index) => (
            <TabPanel key={index} className={styles.tabs__content}>
              {element}
            </TabPanel>
          ))}
        </Tabs>
        <MovieModalInfo />
      </div>
    </div>
  );
};
