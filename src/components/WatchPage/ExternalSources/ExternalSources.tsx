import Image from 'next/image';
import Link from 'next/link';

import { Text, Title } from '@/newui';
import { useAppSelector } from '@/shared/hooks';
import { useFetchFilmExternalSourcesQuery } from '@/shared/services';
import { selectModal } from '@/shared/store';

import styles from './ExternalSources.module.scss';

export const ExternalSources = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const params = { id: currentMovie?.kinopoiskId || 0 };
  const { data: sources, isSuccess } = useFetchFilmExternalSourcesQuery(params);
  if (!isSuccess) return <></>;
  return (
    <div className={styles.sources_container}>
      <Title>Смотреть полностью:</Title>
      <div className={styles.sources}>
        {params.id && sources?.items
          ? sources.items.map((item) => (
              <Link href={item.url} key={item.platform} className={styles.source_item}>
                <div className={styles.img}>
                  <Image fill alt={'logo'} src={item.logoUrl} />
                </div>
                <div className={styles.text}>
                  <Text color={'gray-light'}>{item.platform}</Text>
                </div>
              </Link>
            ))
          : ''}
      </div>
    </div>
  );
};
