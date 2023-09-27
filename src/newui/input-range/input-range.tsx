import { ChangeEvent, FC, memo, useEffect, useState } from 'react';

import { Text } from '@/newui';
import { useAppDispatch, useAppSelector, useDebounce } from '@/shared/hooks';
import { selectFilters, setRatingFrom } from '@/shared/store';

import styles from './input-range.module.scss';
import { InputRangeProps } from './input-range.props';

export const InputRange: FC<InputRangeProps> = memo(
  ({ minLimit, maxLimit, range, children }): JSX.Element => {
    const { ratingFrom } = useAppSelector(selectFilters);
    const [inputValue, setInputValue] = useState<number | string>(ratingFrom);
    const dispatch = useAppDispatch();
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(() => Math.min(Math.max(e.target.valueAsNumber, minLimit), maxLimit));
    };
    const setValue = useDebounce(() => {
      dispatch(setRatingFrom(+inputValue));
    }, 300);

    useEffect(() => {
      setValue();
    }, [inputValue]);
    return (
      <div className={styles.container}>
        <div className={styles.input_range}>
          <div className={styles.output}>
            <Text color={'white'}>{children}</Text>
            <Text color={'white'}>&gt; {ratingFrom}</Text>
          </div>
          <input
            className={styles.input}
            onChange={handleInput}
            type="range"
            min={minLimit}
            max={maxLimit}
            step={range}
            value={inputValue}
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
