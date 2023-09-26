import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/components/Modals/WatchPageModal/WatchPageModal.module.scss';
import { Loader } from '@/newui';
import { iPerson } from '@/shared/types/kinopoiskTypes';

interface iStaffList {
  persons: iPerson[];
}

export const StaffList: FC<iStaffList> = ({ persons }) => {
  const { i18n } = useTranslation();
  if (!persons?.length) return <Loader />;
  return (
    <div className={styles.cards} onClick={close}>
      {persons.map((person: iPerson) => {
        const { staffId, posterUrl: url, nameRu, nameEn } = person;
        return (
          <Link href={`/person/${staffId}`} key={staffId + 'id'} className={styles.link}>
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
              {(nameRu || nameEn) &&
                (i18n.language == 'en' ? nameEn || nameRu : nameRu || nameEn)
                  .split(' ')
                  .map((letter) => (
                    <p key={Math.random() * staffId} className={styles.name}>
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
