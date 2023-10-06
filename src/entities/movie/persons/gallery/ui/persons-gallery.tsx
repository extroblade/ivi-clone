import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { PersonForGallery } from '@/entities/movie/persons/gallery/person/person-for-gallery';
import { useScrollTop } from '@/features/scroll-to-top/lib';
import { Sup, Title } from '@/newui';
import { setCurrentTab, setShowWatchPageModal } from '@/shared/store/reducers/modals.slice';

import { PersonsGalleryProps } from '../model/PersonsGallery.props';
import styles from './persons-gallery.module.scss';

export const PersonsGallery: FC<PersonsGalleryProps> = ({ list }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const scrollTop = useScrollTop();
  const open = () => {
    dispatch(setShowWatchPageModal(true));
    dispatch(setCurrentTab(0));
    scrollTop?.();
  };
  if (!list?.length) return <></>;
  return (
    <div className={styles.wrap}>
      <Title style={{ cursor: 'pointer' }} onClick={open}>
        {t('sections.actors-creators')} <Sup>{list?.length || 0}</Sup>
      </Title>
      <div className={styles.list}>
        <div className={styles.list__wrap}>
          {list.slice(0, 9).map((person) => (
            <PersonForGallery key={person.staffId + person.professionKey} person={person} />
          ))}
        </div>
        {list.length > 10 && (
          <div className={cn(styles.card, styles.card__text)} onClick={open}>
            {t('buttons.more')}
          </div>
        )}
      </div>
    </div>
  );
};
