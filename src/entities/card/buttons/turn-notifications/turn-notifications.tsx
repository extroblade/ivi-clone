import { MouseEvent } from 'react';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';

import { Button } from '@/newui';
import { useAppDispatch, useBooleanState } from '@/shared/hooks';
import { setShowUnsub } from '@/shared/store';

export const TurnNotificationsButton = () => {
  const [isTurnedOn, { handleOpen, handleClose }] = useBooleanState();
  const dispatch = useAppDispatch();
  const turn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isTurnedOn) {
      handleOpen();
      return;
    }
    dispatch(setShowUnsub(true));
    handleClose();
  };
  return (
    <Button appearance={'square'} onClick={turn}>
      {isTurnedOn ? <AiFillBell /> : <AiOutlineBell />}
    </Button>
  );
};
