import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './WatchPageModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '@/components/Button/Button';
import { HiChevronLeft } from 'react-icons/hi';
import { selectModal, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { useTranslation } from 'react-i18next';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CommentSection from '@/components/Comment/CommentSection';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import Image from 'next/image';
import { useFetchAllPersonsQuery } from '@/services/person.api';
import Loader from '@/components/Loader/Loader';
import { getRemainingFilmAmount } from '@/helpers/remainingAmount';
import Sup from '@/components/Sup/Sup';
import WatchModalInfoCard from '@/components/Modals/WatchPageModal/WatchModalInfoCard';

const WatchPageModal: FC = () => {
  const dispatch = useAppDispatch();
  const { currentMovie, showWatchPageModal } = useAppSelector(selectModal);
  const { data: personsList } = useFetchAllPersonsQuery();
  const { t, i18n } = useTranslation();
  usePreventScroll(showWatchPageModal);
  const close = () => {
    dispatch(setShowWatchPageModal(false));
  };
  useEscapeKey(close);

  const [persons, setPersons] = useState([]);
  useEffect(() => {
    if (personsList?.length) {
      const set = new Set(currentMovie?.persons);
      setPersons(() => personsList.filter((pers) => set.has(pers.id)));
    }
  }, [personsList?.length, currentMovie]);

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
                  {t('categories.comments')} <Sup text={3} />
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.trailers')}
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.awards')}
                </Tab>
              </TabList>

              <TabPanel className={styles.tabs__content}>
                <Htag tag="h3">{t('categories.actors')}</Htag>

                {persons?.length ? (
                  <div className={styles.cards} onClick={close}>
                    {persons.map((person) => {
                      const { id, url, enName, name, films } = person;
                      return (
                        <Link href={`/person/${id}`} key={person.id + 'id'} className={styles.link}>
                          <div className={styles.card}>
                            <div className={styles.img}>
                              <Image
                                fill
                                sizes={'(max-width: 768px) 100vw, (max-width: 300px) 25vw, 20vw'}
                                src={url}
                                alt=""
                              />
                            </div>
                          </div>
                          <div>
                            {(enName || name) &&
                              (i18n.language == 'en' ? enName : name).split(' ').map((letter) => (
                                <p key={Math.random() * id} className={styles.name}>
                                  {letter}
                                </p>
                              ))}
                            <P size="S">
                              {films?.length}{' '}
                              {i18n.language == 'en' ? 'movies' : getRemainingFilmAmount(films)}
                            </P>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <Loader />
                )}
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <div className={styles.comments}>
                  <CommentSection id={currentMovie.id} />
                </div>
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <h2>{t('categories.trailers')}</h2>
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <h2>{t('categories.awards')}</h2>
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
