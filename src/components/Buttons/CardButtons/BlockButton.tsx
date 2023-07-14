import React, { useState } from 'react';
import { MdBlock } from 'react-icons/md';
import { Button } from '@/UI/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectModal, setActiveAlerts } from '@/store/reducers/modals.slice';
import { createNewAlert } from '@/helpers/createNewAlert';

const BlockButton = () => {
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
        activeAlerts
      );
      dispatch(setActiveAlerts(newAlertList));
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
