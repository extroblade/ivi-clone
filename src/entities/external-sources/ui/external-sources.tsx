import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { Carousel } from '@/entities/carousel';
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
    <div className={styles.sources}>
      <Title>Смотреть полностью:</Title>
      <Carousel>
        {sources.items.map(({ url, logoUrl, platform }) => (
          <div key={url} className={styles.carousel_item}>
            <Link href={url} target={'_blank'} className={styles.source_item}>
              <div className={styles.img}>
                {logoUrl && <Image fill alt={platform} src={logoUrl} />}
              </div>
              <Text color={'gray-light'} className={styles.text}>
                {platform}
              </Text>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
