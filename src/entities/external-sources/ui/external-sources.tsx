import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { useFetchFilmExternalSourcesQuery } from '@/shared/services';
import { Text, Title } from '@/shared/ui';

import styles from './external-sources.module.scss';

export const ExternalSources: FC = () => {
  const router = useRouter();
  const { data: sources } = useFetchFilmExternalSourcesQuery(
    { id: Number(router.query?.id) },
    { skip: !router.query?.id }
  );
  if (!sources?.total) return <></>;
  return (
    <>
      <Title>Смотреть полностью:</Title>
      <div className={styles.sources}>
        {sources.items.map(({ url, logoUrl, platform }) => (
          <Link href={url} target={'_blank'} key={url} className={styles.source_item}>
            <div className={styles.img}>
              {logoUrl && <Image fill alt={platform} src={logoUrl} />}
            </div>
            <div className={styles.text}>
              <Text color={'gray-light'}>{platform}</Text>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
