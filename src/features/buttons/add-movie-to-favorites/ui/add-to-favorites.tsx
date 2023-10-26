import { MouseEvent } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

import { useBooleanState } from '@/shared/hooks';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';
import { Button } from '@/shared/ui';
import { AppearanceVariants } from '@/shared/ui/button/button.props';

export const AddToFavoritesButton = ({
  appearance = 'transparent',
}: {
  appearance?: AppearanceVariants;
}) => {
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
