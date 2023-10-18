import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Text, Title } from '@/shared/ui';

import { WatchOnAllDevicesProps } from '../model/props';
import styles from './watch-on-all-devices.module.scss';

export const WatchOnAllDevices: FC<WatchOnAllDevicesProps> = ({ name, image }) => {
  const { t } = useTranslation();
  if (!image) return <></>;
  return (
    <div className={styles.content_card}>
      <div className={styles.wrapper}>
        <div className={styles.appeal}>
          <Title tag={'h3'}>Смотреть {name} на всех устройствах</Title>
          <Text className={styles.subtitle}>
            Приложение доступно для скачивания на iOS, Android, SmartTV и приставках
          </Text>
          <Link className={styles.link} href={'https://www.ivi.ru/devices'}>
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
