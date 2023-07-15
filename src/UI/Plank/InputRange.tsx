import React, { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react';
import { P } from '@/UI/P/P';
import styles from './Plank.module.scss';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectFilters, setRatingFrom } from '@/store/reducers/filters.slice';
import { useDebounce } from '@/hooks/useDebounce';

interface iRange {
  minLimit: number;
  maxLimit: number;
  range: number;
  children: ReactNode;
  type: 'rating' | 'comments';
}

const InputRange: FC<iRange> = ({ minLimit, maxLimit, range, children, type }): JSX.Element => {
  const { ratingFrom } = useAppSelector(selectFilters);
  const [inputValue, setInputValue] = useState<number>(ratingFrom);
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
          <P color={'white'}>{children}</P>
          <P color={'white'}>&gt; {ratingFrom}</P>
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
              ((ratingFrom - minLimit) * 100) / (maxLimit - minLimit)
            }%, #A2002DFF 0%)`,
          }}
        />
      </div>
    </div>
  );
};

export default InputRange;
