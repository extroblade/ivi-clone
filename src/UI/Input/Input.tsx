import React, { useState } from 'react';

import styles from './Input.module.scss';

export const Input = ({ label }) => {
  const [query, setQuery] = useState<string>('');

  return (
    <div className={styles.input}>
      <input
        className={!!query ? styles.input__active : ''}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <label>{label}</label>
    </div>
  );
};
