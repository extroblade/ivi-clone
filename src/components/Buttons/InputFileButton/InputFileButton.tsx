import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import styles from './InputFileButton.module.scss';

interface InputFileProps {
  setSelected: (prev: any) => any;
}

export const InputFileButton: FC<InputFileProps> = ({ setSelected }) => {
  const { t } = useTranslation();
  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e?.target?.files;
    if (!files?.length) {
      return;
    }
    setSelected(() => files[0]);
  };
  return (
    <label className={styles.inputFile}>
      <input type="file" name="file" onChange={(e) => selectFile(e)} />
      <span>{t('buttons.choose-file')}</span>
    </label>
  );
};
