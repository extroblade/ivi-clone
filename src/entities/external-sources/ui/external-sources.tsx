import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { ExternalSourcesProps } from '@/entities/external-sources/model/props';
import { Text, Title } from '@/newui';
import { useFetchFilmExternalSourcesQuery } from '@/shared/services';

import styles from './external-sources.module.scss';

export const ExternalSources: FC<ExternalSourcesProps> = ({ id }) => {
  const router = useRouter();
  const { data: sources } = useFetchFilmExternalSourcesQuery(
    { id: Number(router.query?.id) || id || 0 },
    { skip: !router.query?.id }
  );
  if (!sources?.total) return <></>;
  return (
    <div className={styles.sources_container}>
      <Title>Смотреть полностью:</Title>
      <div className={styles.sources}>
        {sources.items.map(({ url, logoUrl, platform }, index) => (
          <Link href={url} target={'_blank'} key={index} className={styles.source_item}>
            <div className={styles.img}>{logoUrl && <Image fill alt={'logo'} src={logoUrl} />}</div>
            <div className={styles.text}>
              <Text color={'gray-light'}>{platform}</Text>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
