import cn from 'classnames';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { BsCheckLg } from 'react-icons/bs';

import { Dropdown } from '@/entities/dropdown';

import { ChooseDropdownProps } from '../model/props';
import styles from './styles.module.scss';

const years: number[] = [];
for (let i = 1950; i < 2024; i++) years.push(i);

export const ChooseDropdown: FC<ChooseDropdownProps> = ({
  isOpen,
  name,
  onClick,
  data,
}): JSX.Element => {
  const router = useRouter();
  return (
    <Dropdown state={isOpen}>
      <div className={cn(styles.dropdown, styles.choose)}>
        <div className={styles.list_container}>
          <ul>
            {data?.map((item) => (
              <li
                onClick={() => onClick(item.id)}
                key={item.id}
                title={'title'}
                className={cn(item?.id == router.query?.[name] && styles.checked)}
              >
                <label>
                  <input type="checkbox" value={item[name]} />
                  <div className={styles.input_text}>{item[name]}</div>
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
