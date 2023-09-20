import Image from 'next/image';
import Link from 'next/link';

import { useAppSelector } from '@/hooks';
import { useFetchFilmExternalSourcesQuery } from '@/services';
import { selectModal } from '@/store';
import { P, Title } from '@/UI';

import styles from './ExternalSources.module.scss';
export const ExternalSources = () => {
  const { currentMovie } = useAppSelector(selectModal);
  const params = { id: currentMovie?.kinopoiskId || 0 };
  const { data: sources, isSuccess } = useFetchFilmExternalSourcesQuery(params);
  if (!isSuccess) return <></>;
  return (
    <div className={styles.sources_container}>
      <Title text={'Смотреть полностью:'} />
      <div className={styles.sources}>
        {params.id && sources?.items
          ? sources.items.map((item) => (
              <Link href={item.url} key={item.platform} className={styles.source_item}>
                <div className={styles.img}>
                  <Image fill alt={'logo'} src={item.logoUrl} />
                </div>
                <div className={styles.text}>
                  <P color={'gray-light'}>{item.platform}</P>
                </div>
              </Link>
            ))
          : ''}
      </div>
    </div>
  );
};
