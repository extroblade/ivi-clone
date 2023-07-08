import React, { useState } from 'react';
import { Button } from '@/UI/Button/Button';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';
import { setShowUnsub } from '@/store/reducers/modals.slice';
import { useAppDispatch } from '@/hooks/redux';

const TurnNotificationsButton = () => {
  const [turned, setTurned] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const turn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (turned) {
      dispatch(setShowUnsub(true));
      setTurned(() => false);
    } else {
      setTurned(() => true);
    }
  };
  return (
    <Button appearance={'square'} onClick={turn}>
      {turned ? <AiFillBell /> : <AiOutlineBell />}
    </Button>
  );
};

export default TurnNotificationsButton;
