import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { ExternalSourcesProps } from '@/entities/external-sources/model/props';
import { Text, Title } from '@/newui';
import { useFetchFilmExternalSourcesQuery } from '@/shared/services';

import styles from './external-sources.module.scss';

export const ExternalSources: FC<ExternalSourcesProps> = ({ id }) => {
  const { data: sources } = useFetchFilmExternalSourcesQuery({ id });
  if (!sources?.total) return <></>;
  return (
    <div className={styles.sources_container}>
      <Title>Смотреть полностью:</Title>
      <div className={styles.sources}>
        {sources.items.map((item) => (
          <Link href={item.url} key={item.platform} className={styles.source_item}>
            <div className={styles.img}>
              <Image fill alt={'logo'} src={item.logoUrl} />
            </div>
            <div className={styles.text}>
              <Text color={'gray-light'}>{item.platform}</Text>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
