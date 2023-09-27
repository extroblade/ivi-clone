import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { localizeName } from '@/shared/helpers/localize-name';
import { iPerson } from '@/shared/types/kinopoiskTypes';

import { StaffListProps } from '../model/props';
import styles from './staff-list.module.scss';

export const StaffList: FC<StaffListProps> = ({ persons }) => {
  if (!persons?.length) return <></>;
  return (
    <div className={styles.cards}>
      {persons.map((person: iPerson) => {
        const { staffId, posterUrl: url } = person;
        return (
          <Link href={`/person/${staffId}`} key={staffId} className={styles.link}>
            <div className={styles.card}>
              <div className={styles.img}>
                <Image
                  fill
                  sizes={'(max-width: 768px) 100vw, (max-width: 300px) 25vw, 20vw'}
                  src={url}
                  alt=""
                />
              </div>
            </div>
            <div>
              {localizeName(person)
                .split(' ')
                .map((letter) => (
                  <p key={staffId + letter} className={styles.name}>
                    {letter}
                  </p>
                ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
