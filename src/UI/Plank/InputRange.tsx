import React, { ChangeEvent, FC, memo, ReactNode, useEffect, useState } from 'react';

import { Text } from '@/newui';
import { useAppDispatch, useAppSelector, useDebounce } from '@/shared/hooks';
import { selectFilters, setRatingFrom } from '@/shared/store';

import styles from './Plank.module.scss';

interface iRange {
  minLimit: number;
  maxLimit: number;
  range: number;
  children: ReactNode;
  type: 'rating' | 'comments';
}

export const InputRange: FC<iRange> = memo(
  ({ minLimit, maxLimit, range, children, type }): JSX.Element => {
    const { ratingFrom } = useAppSelector(selectFilters);
    const [inputValue, setInputValue] = useState<number | string>(ratingFrom);
    const dispatch = useAppDispatch();
    const handler = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.valueAsNumber < minLimit) {
        setInputValue(minLimit);
      } else if (e.target.valueAsNumber + range > maxLimit) {
        setInputValue(maxLimit);
      } else {
        setInputValue(e.target.valueAsNumber);
      }
    };
    const setValue = useDebounce(() => {
      if (type == 'rating') {
        dispatch(setRatingFrom(+inputValue));
      } else if (type == 'comments') {
        console.log('currently not available');
      }
    }, 300);

    useEffect(() => {
      setValue();
    }, [inputValue]);
    return (
      <div className={styles.plank}>
        <div className={styles.input_range}>
          <div className={styles.output}>
            <Text color={'white'}>{children}</Text>
            <Text color={'white'}>&gt; {ratingFrom}</Text>
          </div>
          <input
            className={styles.input}
            onChange={(e) => handler(e)}
            type="range"
            min={minLimit}
            max={maxLimit}
            step={range}
            value={ratingFrom}
            style={{
              background: `linear-gradient(90deg, #1f1b2d ${
                ((+ratingFrom - minLimit) * 100) / (maxLimit - minLimit)
              }%, #A2002DFF 0%)`,
            }}
          />
        </div>
      </div>
    );
  }
);
