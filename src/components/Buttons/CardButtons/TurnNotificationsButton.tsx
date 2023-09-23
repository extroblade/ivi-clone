import React, { useState } from 'react';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';

import { useAppDispatch } from '@/hooks';
import { setShowUnsub } from '@/shared/store';
import { Button } from '@/UI';

export const TurnNotificationsButton = () => {
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
