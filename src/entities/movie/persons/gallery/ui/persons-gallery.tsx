import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { PersonForGallery } from '@/entities/movie/persons/gallery/person/person-for-gallery';
import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Sup, Title } from '@/newui';
import { useFetchAllPersonsQuery } from '@/shared/services';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store/reducers/modals.slice';

import styles from './persons-gallery.module.scss';

export const PersonsGallery: FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: persons } = useFetchAllPersonsQuery(
    {
      filmId: Number(router.query?.id),
    },
    { skip: !router.query?.id }
  );
  const dispatch = useDispatch();
  const scrollTop = useScrollTop();
  const handleOpen = () => {
    dispatch(setShowWatchPageModal(true));
    dispatch(setCurrentTab(0));
    scrollTop?.();
  };
  if (!persons?.length) return <></>;
  return (
    <div className={styles.wrap}>
      <Title style={{ cursor: 'pointer' }} onClick={handleOpen}>
        {t('sections.actors-creators')} <Sup>{persons?.length || 0}</Sup>
      </Title>
      <div className={styles.list}>
        <div className={styles.list__wrap}>
          {persons.slice(0, 9).map((person) => (
            <PersonForGallery key={person.staffId + person.professionKey} person={person} />
          ))}
        </div>
        {persons.length > 10 && (
          <div className={cn(styles.card, styles.card__text)} onClick={handleOpen}>
            {t('buttons.more')}
          </div>
        )}
      </div>
    </div>
  );
};
