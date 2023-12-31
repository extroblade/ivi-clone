import Image from 'next/image';
import Link from 'next/link';

import { getProfessionByType } from '@/shared/constants';
import { useLocalizeName } from '@/shared/hooks/useLocalizeName';
import { iPerson } from '@/shared/types/kinopoiskTypes';
import { Text } from '@/shared/ui';

import styles from './styles.module.scss';

export const PersonForStaff = ({ person }: { person: iPerson }) => {
  const { staffId, posterUrl, professionKey } = person;
  const personName = useLocalizeName(person);
  return (
    <Link href={`/name/${staffId}`} key={staffId} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.img}>
          {posterUrl && (
            <Image
              fill
              sizes={'(max-width: 768px) 100vw, (max-width: 300px) 25vw, 20vw'}
              src={posterUrl}
              alt={personName || 'person'}
            />
          )}
        </div>
      </div>
      <Text size={'S'} color={'gray-light'}>
        {personName}
      </Text>
      <Text size={'S'}>{getProfessionByType(professionKey)}</Text>
    </Link>
  );
};
