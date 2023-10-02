import cn from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineSort,
} from 'react-icons/md';

import { SortProps } from '@/entities/dropdown/sort/model/props';
import { Button } from '@/newui';
import { useOutsideClick, useSearchParamsState } from '@/shared/hooks';

import styles from './SortDropdown.module.scss';

const sorts: SortProps[] = [
  { value: 'RATING', title: 'рейтингу' },
  { value: 'NUM_VOTE', title: 'оценкам' },
  { value: 'YEAR', title: 'годам' },
];
export const SortDropdown: FC = (): JSX.Element => {
  const [sortDrop, setSortDrop] = useState(false);
  const { t } = useTranslation();
  const ref = useRef(null);
  const [order, setOrder] = useSearchParamsState<string>({
    name: 'order',
  });
  const closeState = () => {
    setSortDrop(() => false);
  };
  const changeState = () => {
    setSortDrop((val) => !val);
  };
  useOutsideClick(closeState, ref);

  const [current, setCurrent] = useState(0);

  const handleChoose = (currentSort: number) => {
    setCurrent(() => (current === currentSort ? 0 : currentSort));
    closeState();
  };

  useEffect(() => {
    setOrder(sorts[current].value);
  }, [current]);

  return (
    <div className={styles.drop} ref={ref}>
      <Button appearance={'transparent'} onClick={changeState}>
        <div className={styles.filters__icon}>
          <div className={styles.icon}>
            <MdOutlineSort />
          </div>
          <div className={styles.head_title}>{sorts[current].title || 'sort'}</div>
          {!sortDrop ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
        </div>
      </Button>
      <div className={cn(styles.drop_container, sortDrop && styles.opened)}>
        <div className={styles.dropdown__title}>{t('buttons.sort')}</div>
        {sorts.map((sort, index) => (
          <button
            className={cn(styles.dropdown__item, index == current && styles.active)}
            key={index}
            onClick={() => handleChoose(index)}
          >
            <div className={index == current ? styles.stripe : ''} />
            <div className={styles.dropdown__item__itemText} key={index}>
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
