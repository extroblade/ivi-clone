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
  if (!data?.length)
    return (
      <Dropdown state={isOpen}>
        <div className={cn(styles.dropdown, styles.choose)}>
          <div className={styles.list_container}>
            <ul className={styles.list}>
              {Array(30)
                .fill(1)
                .map((_, index) => (
                  <div key={index} className={cn(styles.item, 'loader')} />
                ))}
            </ul>
          </div>
        </div>
      </Dropdown>
    );
  return (
    <Dropdown state={isOpen}>
      <div className={cn(styles.dropdown, styles.choose)}>
        <div className={styles.list_container}>
          <ul className={styles.list}>
            {data?.map((item) => (
              <li
                onClick={() => onClick(item.id)}
                key={item.id}
                title={'title'}
                className={cn(styles.item, item?.id == router.query?.[name] && styles.checked)}
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
