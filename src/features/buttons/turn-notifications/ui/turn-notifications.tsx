import { MouseEvent } from 'react';
import { AiFillBell, AiOutlineBell } from 'react-icons/ai';

import { useAppDispatch, useBooleanState, useCreateAlert } from '@/shared/hooks';
import { setShowUnsub } from '@/shared/store';
import { Button } from '@/shared/ui';
import { AppearanceVariants } from '@/shared/ui/button/button.props';

export const TurnNotificationsButton = ({
  appearance = 'transparent',
}: {
  appearance?: AppearanceVariants;
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
