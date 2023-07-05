import React, { FC } from 'react';
import { PersonsGalleryProps } from './PersonsGallery.props';
import cn from 'classnames';
import styles from './PersonsGallery.module.scss';
import Link from 'next/link';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { useTranslation } from 'react-i18next';
import { selectModal, setCurrentMovie, setShowWatchPageModal } from '@/store/reducers/modals.slice';
import { useDispatch } from 'react-redux';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/redux';
import Sup from '@/components/Sup/Sup';
import { professionTypes } from '@/constants/Professions';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { currentMovie } = useAppSelector(selectModal);
  const open = () => {
    dispatch(setShowWatchPageModal(true));
    dispatch(setCurrentMovie({ ...currentMovie, index: 0 }));
  };
  return (
    <>
      {list?.length > 0 && (
        <div className={styles.wrap}>
          <div className={styles.title_container}>
            <div className={styles.title} onClick={open}>
              <Htag tag={'h4'}>{t('sections.actors-creators')}</Htag> <Sup text={list?.length} />
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.list__wrap}>
              {list.slice(0, 9).map((person) => {
                const { posterUrl: url, staffId, nameRu, nameEn, professionKey } = person;
                return (
                  <Link
                    href={`/person/${staffId}`}
                    key={staffId + professionKey}
                    className={styles.link}
                  >
                    <div className={styles.card}>
                      <div className={styles.img}>
                        <Image
                          src={url}
                          fill
                          sizes={'(max-width: 768px) 100vw, (max-width: 300px) 25vw, 20vw'}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      {(i18n.language == 'en' ? nameEn || nameRu : nameRu || nameEn)
                        .split(' ')
                        .slice(0, 2)
                        .map((word) => (
                          <>
                            {word?.length && (
                              <p key={staffId + word} className={styles.name}>
                                {word}
                              </p>
                            )}
                          </>
                        ))}
                      <P size="S">
                        {i18n.language == 'en'
                          ? professionTypes[professionKey].enName
                          : professionTypes[professionKey].ruName}
                      </P>
                    </div>
                  </Link>
                );
              })}
            </div>
            {list?.length > 10 && (
              <div className={cn(styles.card, styles.card__text)} onClick={open}>
                {t('buttons.more')}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
