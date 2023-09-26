import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PersonCard } from '@/components';
import { RatingPlate } from '@/features/rating-block/rating-plate';
import { useAppSelector } from '@/shared/hooks';
import { selectModal } from '@/shared/store';
import { iPerson } from '@/shared/types/kinopoiskTypes';

import styles from './PersonList.module.scss';
import { PersonListProps } from './PersonList.props';

export const PersonList: FC<PersonListProps> = ({ rating }) => {
  const { currentMovie } = useAppSelector(selectModal);
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.list}>
      <PersonCard title={t('categories.rating') || ''}>
        <RatingPlate rating={rating} />
      </PersonCard>
      {currentMovie?.persons?.slice(0, 4).map((person: iPerson) => {
        const { staffId, posterUrl, nameRu, nameEn, nameOriginal } = person;
        const name =
          i18n.language === 'en'
            ? nameEn || nameOriginal || nameRu
            : nameRu || nameOriginal || nameEn;
        return (
          <PersonCard key={staffId} title={name}>
            <Link href={`/person/${staffId}`}>
              <div className={styles.person}>
                <Image width={44} height={44} src={posterUrl} alt={nameRu} />
              </div>
            </Link>
          </PersonCard>
        );
      })}
    </div>
  );
};
