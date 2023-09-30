import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineSort,
} from 'react-icons/md';

import { SortProps } from '@/entities/dropdown/sort/model/props';
import { Button } from '@/newui';
import { useAppDispatch, useOutsideClick } from '@/shared/hooks';
import { setOrder } from '@/shared/store';

import styles from './SortDropdown.module.scss';

export const SortDropdown: FC = (): JSX.Element => {
  const [sortDrop, setSortDrop] = useState(false);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const ref = useRef(null);
  const closeState = () => {
    setSortDrop(() => false);
  };
  const changeState = () => {
    setSortDrop((val) => !val);
  };
  useOutsideClick(closeState, ref);

  const sorts: SortProps[] = [
    { id: 0, title: t('sections.by-default') },
    { id: 1, value: 'RATING', title: 'рейтингу' },
    { id: 2, value: 'NUM_VOTE', title: 'оценкам' },
    { id: 3, value: 'YEAR', title: 'годам' },
  ];
  const [current, setCurrent] = useState(0);

  const handler = useCallback(
    (currentSort: SortProps) => {
      if (current === currentSort.id) {
        setCurrent(() => 0);
      } else {
        setCurrent(() => currentSort.id);
      }
      if (current === 0) {
        setTimeout(() => {
          closeState();
        }, 50);
      }
    },
    [current]
  );

  useEffect(() => {
    const newOrder = sorts.find((sort) => sort.id == current)?.value;
    if (newOrder) {
      dispatch(setOrder(newOrder));
    }
    setTimeout(() => {
      closeState();
    }, 150);
  }, [current]);

  return (
    <div className={styles.drop} ref={ref}>
      <Button appearance={'transparent'} onClick={changeState}>
        <div className={styles.filters__icon}>
          <div className={styles.icon}>
            <MdOutlineSort />
          </div>
          <div className={styles.head_title}>
            {sorts.find((sort) => sort.id === current)?.title || 'sort'}
          </div>
          {!sortDrop ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
        </div>
      </Button>
      <div className={`${styles.drop_container} ${sortDrop ? styles.opened : ''}`}>
        <div className={styles.dropdown__title}>{t('buttons.sort')}</div>
        {sorts.map((sort) => (
          <button
            className={`${styles.dropdown__item} ${sort.id == current ? styles.active : ''}`}
            key={sort.id}
            onClick={() => handler(sort)}
          >
            <div className={sort.id == current ? styles.stripe : ''} />
            <div className={styles.dropdown__item__itemText} key={sort.id}>
              {sort.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

// const sorts = [
//   { id: 1, title: t('sections.by-amount') },
//   { id: 2, title: t('sections.by-name-asc') },
//   { id: 3, title: t('sections.by-name-desc') },
//   { id: 4, title: t('sections.by-date') },
//   { id: 5, title: t('sections.by-rating-asc') },
//   { id: 6, title: t('sections.by-rating-desc') },
//   { id: 0, title: t('sections.by-default') },
// ];
