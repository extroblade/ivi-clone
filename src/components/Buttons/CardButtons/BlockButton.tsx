import React, { useState } from 'react';
import { MdBlock } from 'react-icons/md';
import { Button } from '@/UI/Button/Button';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectModal, setActiveAlerts } from '@/store/reducers/modals.slice';
import { createNewAlert } from '@/helpers/createNewAlert';
import { Tooltip } from '@/UI/Tooltip/Tooltip';

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
    <Tooltip text="delete">
      {(propsGetter) => (
        <Button
          {...propsGetter({
            onMouseEnter: () => {},
          })}
          appearance={'square'}
          onClick={blockMovie}
        >
          {blocked ? <MdBlock fill={'#ff542e'} /> : <MdBlock />}
        </Button>
      )}
    </Tooltip>
  );
};

export default BlockButton;
