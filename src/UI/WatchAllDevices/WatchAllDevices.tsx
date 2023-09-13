import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Htag, P } from '@/UI';

import styles from './WatchAllDevices.module.scss';

export const WatchAllDevices: FC<{ name: string; image: string }> = ({ name, image }) => {
  const { t } = useTranslation();
  return (
    <div className={styles.content_card}>
      <div className={styles.wrapper}>
        <div className={styles.appeal}>
          <Htag tag={'h3'} className={styles.title}>
            Смотреть {name} на всех устройствах
          </Htag>
          <P className={styles.subtitle}>
            Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
          </P>
          <Link href={'https://www.ivi.ru/devices'}>
            <Button appearance={'red'}>{t('buttons.connect-all-devices')}</Button>
          </Link>
        </div>
        <div className={styles.devices}>
          <div className={styles.image_container}>
            <Image
              width={536}
              height={272}
              alt={'tv-without-poster'}
              src={'/images/tv-without-poster.png'}
              className={styles.image_tv}
            />
            <Image
              width={200}
              height={136}
              alt={'ipad-without-poster'}
              src={'/images/ipad-without-poster.png'}
              className={styles.image_tablet}
            />
            <Image
              width={337}
              height={192}
              alt={'tv-poster'}
              src={image}
              className={styles.poster_tv}
            />
            <Image
              width={188}
              height={102}
              alt={'ipad-poster'}
              src={image}
              className={styles.poster_tablet}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
