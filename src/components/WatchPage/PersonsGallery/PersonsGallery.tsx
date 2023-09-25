import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { professionTypes } from '@/constants';
import { Sup, Text, Title } from '@/newui';
import { scrollTop } from '@/shared/helpers';
import { useAppSelector } from '@/shared/hooks';
import {
  selectModal,
  setCurrentMovie,
  setShowWatchPageModal,
} from '@/shared/store/reducers/modals.slice';

import styles from './PersonsGallery.module.scss';
import { PersonsGalleryProps } from './PersonsGallery.props';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { currentMovie } = useAppSelector(selectModal);
  const open = () => {
    dispatch(setShowWatchPageModal(true));
    dispatch(setCurrentMovie({ ...currentMovie, index: 0 }));
    scrollTop();
  };
  return (
    <>
      {list?.length && (
        <div className={styles.wrap}>
          <Title onClick={open}>
            {t('sections.actors-creators')} <Sup>{list?.length || 0}</Sup>
          </Title>
          <div className={styles.list}>
            <div className={styles.list__wrap}>
              {list.slice(0, 9).map((person) => {
                const {
                  posterUrl: url,
                  staffId,
                  nameRu,
                  nameEn,
                  nameOriginal,
                  professionKey,
                } = person || {};
                const name =
                  (i18n.language == 'en' ? nameEn || nameOriginal : nameRu || nameOriginal) || '';
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
                      {name
                        .split(' ')
                        .slice(0, 2)
                        .map((word) => (
                          <div key={staffId + word}>
                            {word?.length && <p className={styles.name}>{word}</p>}
                          </div>
                        ))}
                      <Text size="S">
                        {professionKey && i18n.language == 'en'
                          ? professionTypes[professionKey]?.enName
                          : professionTypes[professionKey]?.ruName}
                      </Text>
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
