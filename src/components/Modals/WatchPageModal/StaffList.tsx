import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '@/components/Modals/WatchPageModal/WatchPageModal.module.scss';
import { iPerson } from '@/types/kinopoiskTypes';
import Link from 'next/link';
import Image from 'next/image';
import Loader from '@/components/Loader/Loader';

interface iStaffList {
  persons: iPerson[];
}

const StaffList: FC<iStaffList> = ({ persons }) => {
  const { i18n } = useTranslation();

  return (
    <>
      {persons?.length ? (
        <div className={styles.cards} onClick={close}>
          {persons.map((person: iPerson) => {
            const { staffId, posterUrl: url, nameRu, nameEn, professionText } = person;
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default StaffList;
