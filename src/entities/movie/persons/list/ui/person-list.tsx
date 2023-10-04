import Image from 'next/image';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PersonCard } from '@/entities/movie/persons/card/ui/person-card';
import { RatingPlate } from '@/features/rating-block';
import { localizeName } from '@/shared/helpers/localize-name';
import { useAppSelector } from '@/shared/hooks';
import { useFetchAllPersonsQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';

import { PersonListProps } from '../model/PersonList.props';
import styles from './person-list.module.scss';

export const PersonList: FC<PersonListProps> = ({ rating }) => {
  const { currentMovie } = useAppSelector(selectModal);
  const { data: persons } = useFetchAllPersonsQuery(
    { filmId: currentMovie?.kinopoiskId },
    { skip: !currentMovie?.kinopoiskId }
  );
  const { t } = useTranslation();
  return (
    <div className={styles.list}>
      <div className={styles.list_container}>
        <PersonCard title={t('categories.rating') || ''}>
          <RatingPlate rating={rating} />
        </PersonCard>
        {persons?.slice(0, 6).map((person) => (
          <PersonCard
            link={`/name/${person.staffId}`}
            key={person.staffId}
            title={localizeName(person)}
          >
            <div className={styles.person}>
              {person?.posterUrl && (
                <Image width={44} height={44} src={person.posterUrl} alt={localizeName(person)} />
              )}
            </div>
          </PersonCard>
        ))}
      </div>
    </div>
  );
};
