import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PersonCard } from '@/components';
import { RatingPlate } from '@/features/rating-block';
import { localizeName } from '@/shared/helpers/localize-name';
import { useAppSelector } from '@/shared/hooks';
import { useFetchAllPersonsQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';
import { iPerson } from '@/shared/types/kinopoiskTypes';

import styles from './PersonList.module.scss';
import { PersonListProps } from './PersonList.props';

export const PersonList: FC<PersonListProps> = ({ rating }) => {
  const { currentMovie } = useAppSelector(selectModal);
  const { data: persons } = useFetchAllPersonsQuery({
    filmId: currentMovie?.kinopoiskId || 0,
  });
  const { t } = useTranslation();
  return (
    <div className={styles.list}>
      <PersonCard title={t('categories.rating') || ''}>
        <RatingPlate rating={rating} />
      </PersonCard>
      {persons?.slice(0, 4).map((person: iPerson) => (
        <PersonCard key={person?.staffId} title={localizeName(person)}>
          <Link href={`/person/${person?.staffId}`}>
            <div className={styles.person}>
              <Image width={44} height={44} src={person?.posterUrl} alt={localizeName(person)} />
            </div>
          </Link>
        </PersonCard>
      ))}
    </div>
  );
};
