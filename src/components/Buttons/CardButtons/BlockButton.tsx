import React, { useState } from 'react';
import { MdBlock } from 'react-icons/md';

import { createNewAlert } from '@/helpers';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectModal, setActiveAlerts } from '@/shared/store';
import { Button } from '@/UI';

export const BlockButton = () => {
  const [blocked, setBlocked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { activeAlerts } = useAppSelector(selectModal);

  const blockMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (!blocked) {
      const newAlertList = createNewAlert(
        'Спасибо за отметку',
        'Теперь мы будем показывать Вам меньше похожих фильмов',
        activeAlerts || undefined
      );
      dispatch(setActiveAlerts(newAlertList || null));
    }
    setBlocked((blocked) => !blocked);
  };
  return (
    <Button appearance={'square'} onClick={blockMovie}>
      {blocked ? <MdBlock fill={'#ff542e'} /> : <MdBlock />}
    </Button>
  );
};
