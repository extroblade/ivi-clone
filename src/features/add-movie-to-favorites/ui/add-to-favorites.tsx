import { FC, MouseEvent } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

import { Button } from '@/newui';
import { AppearanceVariants } from '@/newui/button/button.props';
import { useBooleanState } from '@/shared/hooks';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';

export const AddToFavoritesButton: FC<{ appearance?: AppearanceVariants }> = ({ appearance }) => {
  const [isBooked, { handleToggle }] = useBooleanState();
  const createAlert = useCreateAlert();
  const handleAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isBooked) {
      createAlert({ extra: 'Добавлено в ваш список избранного!' });
    }

    handleToggle();
  };
  return (
    <Button appearance={appearance} onClick={handleAdd}>
      {isBooked ? <BsFillBookmarkFill /> : <BsBookmark />}
    </Button>
  );
};
