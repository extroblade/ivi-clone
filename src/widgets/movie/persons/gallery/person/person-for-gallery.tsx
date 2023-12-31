import Image from 'next/image';
import Link from 'next/link';

import { getProfessionByType } from '@/shared/constants';
import { useLocalizeName } from '@/shared/helpers';
import { iPerson } from '@/shared/types/kinopoiskTypes';
import { Text } from '@/shared/ui';

import styles from '../ui/persons-gallery.module.scss';

export const PersonForGallery = ({ person }: { person: iPerson }) => {
  const { posterUrl, staffId, professionKey } = person || {};
  const personName = useLocalizeName(person);
  return (
    <Link href={`/name/${staffId}`} key={staffId + professionKey} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.img}>
          {posterUrl && (
            <Image
              src={posterUrl}
              fill
              sizes={'(max-width: 768px) 100vw, (max-width: 300px) 25vw, 20vw'}
              alt=""
            />
          )}
        </div>
      </div>
      <div>
        {personName
          ?.split(' ')
          .slice(0, 2)
          .map((word: string) => (
            <div key={staffId + professionKey + word}>
              {word?.length && <p className={styles.name}>{word}</p>}
            </div>
          ))}
        <Text size="S">{getProfessionByType(professionKey)}</Text>
      </div>
    </Link>
  );
};
