import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';

import { ChooseDropdown } from '@/entities/dropdown';
import { useBooleanState, useSearchParamsState } from '@/shared/hooks';
import { Plank } from '@/shared/ui';
import { FilterPlankProps } from '@/widgets/filter/plank/model/props';

export const FilterPlank: FC<FilterPlankProps> = ({ data, name, defaultName }) => {
  const router = useRouter();
  const [isOpen, { handleClose, handleToggle }] = useBooleanState();
  const [, setParam] = useSearchParamsState<string>({ name });
  const handleClick = (id: number) => {
    setParam(id === Number(router.query?.[name]) ? '' : id);
    handleClose();
  };
  const title = useMemo(() => {
    return data.find((item) => item.id === Number(router.query?.[name]))?.[name] || defaultName;
  }, [defaultName, router.query?.[name], data]);

  return (
    <Plank title={title} isActive={isOpen} onToggle={handleToggle} onClose={handleClose}>
      <ChooseDropdown data={data} onClick={handleClick} isOpen={isOpen} name={name} />
    </Plank>
  );
};
