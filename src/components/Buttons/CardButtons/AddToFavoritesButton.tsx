import React, { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

import { Button } from '@/newui';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';

export const AddToFavoritesButton = () => {
  const [booked, setBooked] = useState<boolean>(false);
  const createAlert = useCreateAlert();
  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (!booked) {
      createAlert({ extra: 'Добавлено в ваш список избранного!' });
    }

    setBooked((booked) => !booked);
  };
  return (
    <Button appearance={'square'} onClick={(e) => addToFavorite(e)}>
      {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
    </Button>
  );
};
