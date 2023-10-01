import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { languageVariants, professionTypes } from 'src/shared/constants';

import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Sup, Text, Title } from '@/newui';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store/reducers/modals.slice';

import { PersonsGalleryProps } from '../model/PersonsGallery.props';
import styles from './persons-gallery.module.scss';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const scrollTop = useScrollTop();
  const open = () => {
    dispatch(setShowWatchPageModal(true));
    dispatch(setCurrentTab(1));
    scrollTop?.();
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
                    href={`/name/${staffId}`}
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
                        {professionTypes[professionKey][i18n.language as languageVariants]}
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
