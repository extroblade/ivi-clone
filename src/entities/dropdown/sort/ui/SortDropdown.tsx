import cn from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdOutlineSort,
} from 'react-icons/md';

import {
  useBooleanState,
  useEscapeKey,
  useOutsideClick,
  useSearchParamsState,
} from '@/shared/hooks';
import { Button } from '@/shared/ui';

import { defaultSorts } from '../model/default-sorts';
import styles from './SortDropdown.module.scss';

export const SortDropdown = () => {
  const router = useRouter();
  const [isActive, { handleClose, handleToggle }] = useBooleanState();
  const { t } = useTranslation();
  const ref = useRef(null);
  const [, setOrder] = useSearchParamsState<string>({
    name: 'order',
  });
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

  useOutsideClick(handleClose, ref);
  useEscapeKey(handleClose);
  return (
    <div ref={ref} className={styles.drop}>
      <Button appearance={'transparent'} onClick={handleToggle}>
        <div className={styles.interactions}>
          <div className={styles.icon}>
            <MdOutlineSort />
          </div>
          <div className={styles.head_title}>{t(defaultSorts[current]?.title) || 'sort'}</div>
          {!isActive ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}
        </div>
      </Button>
      <div className={cn(styles.drop_container, isActive && styles.opened)}>
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
