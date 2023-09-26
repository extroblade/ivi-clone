import i18next from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { RatingPlate } from '@/features/rating-block/rating-plate/ui/rating-plate';

import styles from './PersonCard.module.scss';
import { PersonCardProps } from './PersonCard.props';

export const PersonCard: FC<PersonCardProps> = ({ person, rating }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.person_card}>
      {person ? (
        <>
          <div className={styles.wrapCard}>
            <Link href={`/person/${person.staffId}`}>
              <div className={styles.person}>
                <Image width={44} height={44} src={person.posterUrl} alt={person.nameRu} />
              </div>
            </Link>
          </div>
          <div className={styles.card_name}>
            {i18next.language == 'en'
              ? person.nameEn || person.nameRu
              : person.nameRu || person.nameEn}
          </div>
        </>
      ) : (
        <>
          <div className={styles.wrapCard}>
            <RatingPlate rating={rating || null} />
          </div>
          <div className={styles.card_name} title={t('categories.rating') || ''}>
            {t('categories.rating')}
          </div>
        </>
      )}
    </div>
  );
};
