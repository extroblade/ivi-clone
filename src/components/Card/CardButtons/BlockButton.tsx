import React, { useState } from 'react';
import { MdBlock } from 'react-icons/md';
import { Button } from '@/components/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectModal, setActiveAlerts } from '@/store/reducers/modals.slice';

const BlockButton = () => {
  const [blocked, setBlocked] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { activeAlerts } = useAppSelector(selectModal);

  const blockMovie = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (!blocked) {
      const cur = [];
      const newAlert = {
        id: self.crypto.randomUUID(),
        title: 'Спасибо за отметку',
        extra: 'Теперь мы будем показывать Вам меньше похожих фильмов',
      };
      if (activeAlerts?.length && !activeAlerts?.find((alert) => alert.id == newAlert.id)) {
        cur.push(...activeAlerts, newAlert);
      } else {
        cur.push(newAlert);
      }
      dispatch(setActiveAlerts(cur));
    }
    setBlocked((blocked) => !blocked);
  };
  return (
    <Button appearance={'square'} onClick={blockMovie}>
      {blocked ? <MdBlock fill={'#ff542e'} /> : <MdBlock />}
    </Button>
  );
};

export default BlockButton;
