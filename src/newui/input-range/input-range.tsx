import { useRouter } from 'next/router';
import { ChangeEvent, FC, memo, useEffect, useState } from 'react';

import { Text } from '@/newui';
import { useSearchParamsState } from '@/shared/hooks';

import styles from './input-range.module.scss';
import { InputRangeProps } from './input-range.props';

export const InputRange: FC<InputRangeProps> = memo(
  ({ minLimit, maxLimit, range, children, name }): JSX.Element => {
    const router = useRouter();
    const [param, setParam] = useSearchParamsState<string>({
      name: name,
    });
    const [inputValue, setInputValue] = useState<number | string>(param || minLimit);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setParam(Math.min(Math.max(e.target.valueAsNumber, minLimit), maxLimit));
    };

    useEffect(() => {
      setInputValue(() => (router.query?.[name] as string) || '');
    }, [router.query?.[name]]);
    return (
      <div className={styles.container}>
        <div className={styles.input_range}>
          <div className={styles.output}>
            <Text color={'white'}>{children}</Text>
            <Text color={'white'}>&gt; {+inputValue}</Text>
          </div>
          <input
            className={styles.input}
            onChange={handleInput}
            type="range"
            min={minLimit}
            max={maxLimit}
            step={range}
            value={+inputValue}
            style={{
              background: `linear-gradient(90deg, #1f1b2d ${
                ((+inputValue - minLimit) * 100) / (maxLimit - minLimit)
              }%, #A2002DFF 0%)`,
            }}
          />
        </div>
      </div>
    );
  }
);
