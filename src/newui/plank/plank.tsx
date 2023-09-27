import cn from 'classnames';
import React, { FC, useRef, useState } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

import { useAppSelector, useOutsideClick } from '@/shared/hooks';
import { selectFilters } from '@/shared/store';
import { ChooseDropdown, SearchDropdown } from '@/UI';

import styles from './plank.module.scss';
import { PlankProps } from './plank.props';

export const Plank: FC<PlankProps> = ({ type, array_type }): JSX.Element => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const { genre, yearTo, country } = useAppSelector(selectFilters);
  let title;
  switch (array_type) {
    case 'genre':
      title = genre?.genre || 'Жанр';
      break;
    case 'country':
      title = country?.country || 'Страна';
      break;
    case 'years':
      title = +yearTo < 3000 ? yearTo : 'Год';
      break;
  }
  const change = () => {
    setDropDownOpen((d) => !d);
  };
  const close = () => {
    setDropDownOpen(() => false);
  };
  const plankRef = useRef(null);
  useOutsideClick(close, plankRef);
  return (
    <span ref={plankRef}>
      {type == 'choose' ? (
        <ChooseDropdown state={dropDownOpen} type={array_type} />
      ) : (
        <SearchDropdown state={dropDownOpen} />
      )}
      <button className={cn(styles.plank, dropDownOpen && styles.active)} onClick={change}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
        </div>
        <div className={styles.icon}>
          {dropDownOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
        </div>
      </button>
    </span>
  );
};
