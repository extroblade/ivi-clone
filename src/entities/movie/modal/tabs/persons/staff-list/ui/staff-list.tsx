import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { Text } from '@/newui';
import { getProfessionByType } from '@/shared/constants';
import { localizeName } from '@/shared/helpers/localize-name';

import { StaffListProps } from '../model/props';
import styles from './staff-list.module.scss';

export const StaffList: FC<StaffListProps> = ({ persons }) => {
  if (!persons?.length) return <Text>Не указаны!</Text>;
  return (
    <div className={styles.cards}>
      {persons.map((person) => {
        const { staffId, posterUrl, professionKey } = person;
        return (
          <Link href={`/name/${staffId}`} key={staffId} className={styles.link}>
            <div className={styles.card}>
              <div className={styles.img}>
                {posterUrl && (
                  <Image
                    fill
                    sizes={'(max-width: 768px) 100vw, (max-width: 300px) 25vw, 20vw'}
                    src={posterUrl}
                    alt={localizeName(person)}
                  />
                )}
              </div>
            </div>
            <Text size={'S'} color={'gray-light'}>
              {localizeName(person)}
            </Text>
            <Text size={'S'}>{getProfessionByType(professionKey)}</Text>
          </Link>
        );
      })}
    </div>
  );
};
