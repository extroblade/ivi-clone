import { FC, MouseEvent } from 'react';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';

import { Button } from '@/newui';
import { AppearanceVariants } from '@/newui/button/button.props';
import { useAppDispatch, useBooleanState, useCreateAlert } from '@/shared/hooks';
import { setShowUnsub } from '@/shared/store';

export const TurnNotificationsButton: FC<{ appearance?: AppearanceVariants }> = ({
  appearance = 'transparent',
}) => {
  const [isTurnedOn, { handleToggle }] = useBooleanState();
  const dispatch = useAppDispatch();
  const createAlert = useCreateAlert();
  const handleTurn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (isTurnedOn) {
      dispatch(setShowUnsub(true));
    }
    if (!isTurnedOn) {
      createAlert({ extra: 'Вы успешно подписались на обновления' });
    }
    handleToggle();
  };
  return (
    <Button appearance={appearance} onClick={handleTurn}>
      {isTurnedOn ? <AiFillBell /> : <AiOutlineBell />}
    </Button>
  );
};
