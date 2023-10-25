import { useRouter } from 'next/router';
import { ChangeEvent, memo, ReactNode, useEffect, useState } from 'react';

import { useSearchParamsState } from '@/shared/hooks';
import { Text } from '@/shared/ui';

import styles from './input-range.module.scss';

export const InputRange = memo(
  ({
    minLimit,
    maxLimit,
    range,
    children,
    name,
  }: {
    minLimit: number;
    maxLimit: number;
    range: number;
    children: ReactNode;
    name: string;
  }) => {
    const router = useRouter();
    const [param, setParam] = useSearchParamsState<number>({ name });
    const [inputValue, setInputValue] = useState<number>(param || minLimit);

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
      setParam(Math.min(Math.max(e.target.valueAsNumber, minLimit), maxLimit));
    };

    useEffect(() => {
      setInputValue(() => Number(router.query?.[name]) || minLimit);
    }, [router.query?.[name]]);

    const fixedRange = ((+inputValue - minLimit) * 100) / (maxLimit - minLimit);
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
            value={inputValue}
            style={{
              background: `linear-gradient(90deg, var(--color-input-text) ${fixedRange}%, var(--color-accent) 0%)`,
            }}
          />
        </div>
      </div>
    );
  }
);
