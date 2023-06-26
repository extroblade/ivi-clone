import React, { useState } from 'react';
import { Button } from '@/components/Button/Button';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';

const TurnNotificationsButton = () => {
  const [turned, setTurned] = useState<boolean>(false);

  const turn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (turned) {
      setTurned(() => false); //todo: add modal
    } else {
      setTurned(() => true);
    }
  };
  return (
    <Button appearance={'square'} onClick={turn}>
      {turned ? <AiOutlineBell /> : <AiFillBell />}
    </Button>
  );
};

export default TurnNotificationsButton;
