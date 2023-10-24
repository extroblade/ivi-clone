import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { PersonCard } from '@/entities/movie/persons/card/ui/person-card';
import { PersonForList } from '@/entities/movie/persons/list/person/person-for-list';
import { RatingPlate } from '@/features/rating-block';
import { useFetchAllPersonsQuery } from '@/shared/services';

import styles from './person-list.module.scss';

export const PersonList = ({ rating }: { rating: string | number }) => {
  const router = useRouter();
  const { data: persons } = useFetchAllPersonsQuery(
    { filmId: Number(router.query?.id) },
    { skip: !router.query?.id }
  );

  const { t } = useTranslation();
  if (!persons?.length) return <></>;
  return (
    <div className={styles.list}>
      <div className={styles.list_container}>
        <PersonCard title={t('categories.rating') || ''}>
          <RatingPlate rating={rating} />
        </PersonCard>
        {persons?.slice(0, 6).map((person) => (
          <PersonForList person={person} key={person.staffId + person.professionKey} />
        ))}
      </div>
    </div>
  );
};
