import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './PersonsModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '@/components/Button/Button';
import { HiChevronLeft } from 'react-icons/hi';
import BarGraph from '@/components/BarGraph/BarGraph';
import { selectModal, setShowPersonsModal } from '@/store/reducers/modals.slice';
import { useTranslation } from 'react-i18next';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import CommentSection from '@/components/Comment/CommentSection';
import { usePreventScrollFixed } from '@/hooks/usePreventScrollFixed';
import Image from 'next/image';
import { useFetchAllPersonsQuery } from '@/services/person.api';
import Loader from '@/components/Loader/Loader';

const PersonsModal: FC = () => {
  const dispatch = useAppDispatch();
  const { personModalItem, showPersonsModal } = useAppSelector(selectModal);
  const { data: personsList } = useFetchAllPersonsQuery();
  const { t, i18n } = useTranslation();
  usePreventScrollFixed(showPersonsModal);
  const close = () => {
    dispatch(setShowPersonsModal(false));
  };
  useEscapeKey(close);

  const [persons, setPersons] = useState([]);
  useEffect(() => {
    if (personsList?.length) {
      const set = new Set(personModalItem?.persons);
      setPersons(() => personsList.filter((pers) => set.has(pers.id)));
    }
  }, [personsList?.length, personModalItem]);
  return (
    <>
      {showPersonsModal && (
        <div className={cn(styles.modal, styles.modal__open)}>
          <Button appearance="transparent" className={styles.back} onClick={() => close()}>
            <HiChevronLeft className={styles.back__icon} />
            <span>{t('buttons.to-movie')}</span>
          </Button>
          <div className={styles.wrap}>
            <Tabs className={styles.tabs} defaultIndex={personModalItem.index}>
              <Htag tag={'h2'}>
                {i18n.language == 'en' ? personModalItem?.enName : personModalItem?.name}
              </Htag>
              <TabList className={styles.tabs__title}>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.creators')}
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.comments')}
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
                  persons.map((person) => {
                    const { id, url, enName, name } = person;
                    return (
                      <div className={styles.cards} onClick={close} key={person.id + 'id'}>
                        <Link href={`/person/${id}`} className={styles.link}>
                          <div className={styles.card}>
                            <Image width={120} height={144} src={url} alt="" />
                          </div>
                          <div>
                            {(enName || name) &&
                              (i18n.language == 'en' ? enName : name).split(' ').map((n) => (
                                <p key={Math.random() * id} className={styles.name}>
                                  {n}
                                </p>
                              ))}
                            <P size="S">3 {i18n.language == 'en' ? 'movies' : 'фильма'}</P>
                          </div>
                        </Link>
                      </div>
                    );
                  })
                ) : (
                  <Loader />
                )}
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <div style={{ maxWidth: '70vw', minWidth: '30vw' }}>
                  <CommentSection id={personModalItem?.id} />
                </div>
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <h2>{t('categories.trailers')}</h2>
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <h2>{t('categories.awards')}</h2>
              </TabPanel>
            </Tabs>
            <div className={styles.movie}>
              <Image
                width={128}
                height={196}
                onClick={() => close()}
                className={styles.movie__img}
                src={personModalItem.card_image}
                alt=""
              />
              <div className={styles.movie__info}>
                <div className={styles.graphs}>
                  <span>9,1</span>
                  <div className={styles.graphs__wrap}>
                    <BarGraph width={80} />
                    <BarGraph width={73} />
                    <BarGraph width={62} />
                    <BarGraph width={98} />
                  </div>
                </div>
                <P size="S" className={styles.movie__descr}>
                  2011, США, Фэнтези
                </P>
                <P size="S">130 минут</P>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonsModal;
