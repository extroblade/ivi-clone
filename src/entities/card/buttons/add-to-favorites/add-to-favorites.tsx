import { MouseEvent, useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

import { Button } from '@/newui';
import { AppearanceVariants } from '@/newui/button/button.props';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';

export const AddToFavoritesButton = ({
  appearance = 'transparent',
}: {
  appearance?: AppearanceVariants;
}) => {
  const [booked, setBooked] = useState(false);
  const createAlert = useCreateAlert();
  const addToFavorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    e.nativeEvent.stopPropagation();
    e.stopPropagation();
    if (!booked) {
      createAlert({ extra: 'Добавлено в ваш список избранного!' });
    }

    setBooked((booked) => !booked);
  };
  return (
    <Button appearance={appearance} onClick={addToFavorite}>
      {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
    </Button>
  );
};
