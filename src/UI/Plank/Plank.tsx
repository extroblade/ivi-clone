import React, { FC, useRef, useState } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

import { useAppSelector, useOutsideClick } from '@/hooks';
import { selectFilters } from '@/store';
import { ChooseDropdown, SearchDropdown } from '@/UI';

import styles from './Plank.module.scss';

interface iPlank {
  array_type: 'genre' | 'country' | 'years';
  type: 'choose' | 'find';
}

export const Plank: FC<iPlank> = ({ type, array_type }): JSX.Element => {
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
      title = yearTo < 3000 ? yearTo : 'Год';
      break;
  }
  const change = () => {
    setDropDownOpen((d) => !d);
  };
  const close = () => {
    setDropDownOpen(() => false);
  };
  const ref = useRef(null);
  useOutsideClick(close, ref);
  return (
    <span ref={ref}>
      {type == 'choose' ? (
        <ChooseDropdown state={dropDownOpen} type={array_type} />
      ) : (
        <SearchDropdown state={dropDownOpen} type={array_type} />
      )}
      <button className={`${styles.plank} ${dropDownOpen && styles.active}`} onClick={change}>
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

// {chosen && (
//   <div className={styles.chosen}>
//     {chosen
//       .find((item) => item.plankID === array.id)
//       ?.category.map((item, index) => (
//         <span key={item.id}>
//                     {chosen.find((item) => item.plankID == array.id).category.length > index + 1
//                       ? `${item.title}, `
//                       : item.title}
//                   </span>
//       ))}
//   </div>
// )}
