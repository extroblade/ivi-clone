import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineSort,
} from 'react-icons/md';

import { defaultSorts } from '@/entities/dropdown/sort/model/props';
import { Button } from '@/newui';
import { useOutsideClick, useSearchParamsState } from '@/shared/hooks';

import styles from './SortDropdown.module.scss';

export const SortDropdown: FC = (): JSX.Element => {
  const router = useRouter();
  const [sortDrop, setSortDrop] = useState(false);
  const { t } = useTranslation();
  const ref = useRef(null);
  const [, setOrder] = useSearchParamsState<string>({
    name: 'order',
  });
  const handleClose = () => {
    setSortDrop(() => false);
  };
  const handleToggle = () => {
    setSortDrop((val) => !val);
  };
  useOutsideClick(handleClose, ref);

  const [current, setCurrent] = useState(0);

  const handleChoose = (currentSort: number) => {
    setCurrent(() => (current === currentSort ? 0 : currentSort));
    const newOrder =
      current === currentSort ? defaultSorts[0].value : defaultSorts[currentSort].value;
    setOrder(newOrder);
    handleClose();
  };
  useEffect(() => {
    const newCurrent = Math.max(
      defaultSorts.findIndex((item) => item.value === router.query?.order),
      0
    );
    setCurrent(() => newCurrent);
  }, [router.query?.order]);

  return (
    <div className={styles.drop} ref={ref}>
      <Button appearance={'transparent'} onClick={handleToggle}>
        <div className={styles.interactions}>
          <div className={styles.icon}>
            <MdOutlineSort />
          </div>
          <div className={styles.head_title}>{t(defaultSorts[current]?.title) || 'sort'}</div>
          {!sortDrop ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
        </div>
      </Button>
      <div className={cn(styles.drop_container, sortDrop && styles.opened)}>
        <div className={styles.dropdown__title}>{t('buttons.sort')}</div>
        {defaultSorts.map(({ title }, index) => (
          <button
            className={cn(styles.dropdown__item, index == current && styles.active)}
            key={index}
            onClick={() => handleChoose(index)}
          >
            <div className={index == current ? styles.stripe : ''} />
            <div className={styles.dropdown__item__itemText} key={index}>
              {t(title)}
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
