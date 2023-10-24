import Image from 'next/image';

import { PersonCard } from '@/entities/movie/persons';
import styles from '@/entities/movie/persons/list/ui/person-list.module.scss';
import { useLocalizeName } from '@/shared/helpers';
import { iPerson } from '@/shared/types/kinopoiskTypes';

export const PersonForList = ({ person }: { person: iPerson }) => {
  const personName = useLocalizeName(person);
  return (
    <PersonCard link={`/name/${person.staffId}`} key={person.staffId} title={personName}>
      <div className={styles.person}>
        {person?.posterUrl && (
          <Image width={44} height={44} src={person.posterUrl} alt={personName || 'person'} />
        )}
      </div>
    </PersonCard>
  );
};
