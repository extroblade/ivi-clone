import cn from 'classnames';
import React, { ReactNode, useRef } from 'react';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

import { useOutsideClick } from '@/shared/hooks';

import styles from './plank.module.scss';

export const Plank = ({
  children,
  title,
  isActive,
  onClose,
  onToggle,
}: {
  children: ReactNode[] | ReactNode;
  dropdown?: ReactNode;
  isActive?: boolean;
  onClose: () => void;
  onToggle: () => void;
  title: string;
}) => {
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
