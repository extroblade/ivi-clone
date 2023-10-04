import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { ChooseDropdown } from '@/entities/dropdown';
import { Plank } from '@/newui';
import { useBooleanState, useSearchParamsState } from '@/shared/hooks';
import { FilterPlankProps } from '@/widgets/filter/plank/model/props';

export const FilterPlank: FC<FilterPlankProps> = ({ data, name, defaultName }) => {
  const router = useRouter();
  const [isOpen, { handleClose, handleToggle }] = useBooleanState();
  const [, setParam] = useSearchParamsState<string>({ name });
  const [title, setTitle] = useState<string>(defaultName);
  const handleClick = (id: number) => {
    setParam(id === Number(router.query?.[name]) ? '' : id);
    handleClose();
  };

  useEffect(() => {
    setTitle(() => data.find((item) => item.id == router.query?.[name])?.[name] || defaultName);
  }, [router.query?.[name]]);
  return (
    <Plank title={title} isActive={isOpen} onToggle={handleToggle} onClose={handleClose}>
      <ChooseDropdown data={data} onClick={handleClick} isOpen={isOpen} name={name} />
    </Plank>
  );
};
