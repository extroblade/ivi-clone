import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

import { useAppDispatch } from '@/hooks';
import { setShowSearch } from '@/store';

import styles from './SearchButton.module.scss';

export const SearchButton: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const open = () => {
    dispatch(setShowSearch(true));
  };
  return (
    <div className={styles.search} onClick={open}>
      <FaSearch className={styles.icon} />
      <span>{t('sections.search')}</span>
    </div>
  );
};
