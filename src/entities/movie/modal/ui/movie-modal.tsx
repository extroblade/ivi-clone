import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { HiChevronLeft } from 'react-icons/hi';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import { tabs } from '@/entities/movie/modal/model/tabs';
import { useAppDispatch, useAppSelector, usePreventScroll } from '@/shared/hooks';
import { useEscapeKey } from '@/shared/hooks/useEscapeKey';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { useFetchFilmQuery } from '@/shared/services';
import { selectModal, setShowWatchPageModal } from '@/shared/store';
import { Button, Title } from '@/shared/ui';

import { MovieModalInfo } from '../info';
import styles from './movie-modal.module.scss';

export const MovieModal: FC = () => {
  const dispatch = useAppDispatch();
  const { currentTab, showWatchPageModal } = useAppSelector(selectModal);
  const router = useRouter();
  const { data: movie } = useFetchFilmQuery(Number(router.query?.id), { skip: !router?.query?.id });
  const { t } = useTranslation();
  const handleClose = () => {
    dispatch(setShowWatchPageModal(false));
  };
  const title = useLocalizeName(movie);
  usePreventScroll(showWatchPageModal);
  useEscapeKey(handleClose);
  if (!showWatchPageModal) return <></>;
  return (
    <div className={styles.modal}>
      <Button appearance="transparent" className={styles.back} onClick={handleClose}>
        <HiChevronLeft className={styles.back__icon} />
        <span>{t('buttons.to-movie')}</span>
      </Button>
      <div className={styles.wrap}>
        <Tabs className={styles.tabs} defaultIndex={currentTab}>
          <Title tag={'h2'}>{title}</Title>
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
