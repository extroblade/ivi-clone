import React, { useState } from 'react';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectModal, setActiveAlerts } from '@/shared/store';
import { Button } from '@/UI';

export const AddToFavoritesButton = () => {
  const [booked, setBooked] = useState<boolean>(false);
  const { activeAlerts } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const addToFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (!booked) {
      const cur = [];
      const newAlert = {
        id: self?.crypto?.randomUUID ? self.crypto.randomUUID() : '123',
        title: 'Добавлено в ваш список избранного!',
        extra: '',
      };
      if (activeAlerts?.length && !activeAlerts?.find((alert) => alert.id == newAlert.id)) {
        cur.push(...activeAlerts, newAlert);
      } else {
        cur.push(newAlert);
      }
      dispatch(setActiveAlerts(cur));
    }
    setBooked((booked) => !booked);
  };
  return (
    <Button appearance={'square'} onClick={(e) => addToFavorite(e)}>
      {booked ? <BsFillBookmarkFill /> : <BsBookmark />}
    </Button>
  );
};
