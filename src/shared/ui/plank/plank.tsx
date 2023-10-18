import cn from 'classnames';
import React, { FC, useRef } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

import { useOutsideClick } from '@/shared/hooks';

import styles from './plank.module.scss';
import { PlankProps } from './plank.props';

export const Plank: FC<PlankProps> = ({
  children,
  title,
  isActive,
  onClose,
  onToggle,
}): JSX.Element => {
  const plankRef = useRef(null);
  useOutsideClick(onClose, plankRef);
  return (
    <span ref={plankRef}>
      {children}
      <button className={cn(styles.plank, isActive && styles.active)} onClick={onToggle}>
        <div className={styles.info}>
          <div className={styles.title}>{title}</div>
        </div>
        {isActive !== undefined && (
          <div className={styles.icon}>
            {isActive ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
          </div>
        )}
      </button>
    </span>
  );
};
