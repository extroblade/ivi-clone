import React, { FC, useState } from 'react';

import styles from './Input.module.scss';

export const Input: FC<{ label: string }> = ({ label }) => {
  const [query, setQuery] = useState<string>('');

  return (
    <label className={styles.input}>
      <input
        className={!!query ? styles.input__active : ''}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <span>{label}</span>
    </label>
  );
};
