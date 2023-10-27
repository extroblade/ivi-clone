import Image from 'next/image';

import { useLocalizeName } from '@/shared/helpers';
import { iPerson } from '@/shared/types/kinopoiskTypes';
import { PersonCard } from '@/widgets/movie/persons';

import styles from './styles.module.scss';

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
