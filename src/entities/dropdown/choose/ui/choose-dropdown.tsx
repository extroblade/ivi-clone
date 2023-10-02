import cn from 'classnames';
import React, { FC } from 'react';
import { BsCheckLg } from 'react-icons/bs';

import { Dropdown } from '@/entities/dropdown';

import { ChooseDropdownProps } from '../model/props';
import styles from './styles.module.scss';

const years: number[] = [];
for (let i = 1950; i < 2024; i++) years.push(i);

export const ChooseDropdown: FC<ChooseDropdownProps> = ({ state, onClick, data }): JSX.Element => {
  return (
    <Dropdown state={state}>
      <div className={`${styles.dropdown} ${styles.choose}`}>
        <div className={styles.list_container}>
          <ul>
            {data?.map(({ title, checked }, index) => (
              <li
                onClick={onClick}
                key={index}
                title={'title'}
                className={cn(checked && styles.checked)}
              >
                <label>
                  <input type="checkbox" value={title} />
                  <div className={styles.input_text}>{title}</div>
                  <div className={styles.checkbox}>
                    <div className={styles.checkbox_selected}>
                      <BsCheckLg />
                    </div>
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Dropdown>
  );
};
