import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch } from 'react-icons/fa';

import { useSearchModal } from '../lib/hooks';
import styles from './search-button.module.scss';

export const SearchButton: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { handleState } = useSearchModal();
  return (
    <div className={styles.search} onClick={() => handleState(true)}>
      <FaSearch className={styles.icon} />
      <span>{t('sections.search')}</span>
    </div>
  );
};
