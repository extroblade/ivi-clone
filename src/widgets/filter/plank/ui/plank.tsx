import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { ChooseDropdown } from '@/entities/dropdown';
import { useBooleanState, useSearchParamsState } from '@/shared/hooks';
import { Plank } from '@/shared/ui';

export const FilterPlank = ({
  data,
  name,
  defaultName,
}: {
  name: string;
  data: any[];
  defaultName: string;
}) => {
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
