import { MouseEvent, useState } from 'react';
import { MdBlock } from 'react-icons/md';

import { Button } from '@/newui';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';

export const BlockButton = () => {
  const [blocked, setBlocked] = useState<boolean>(false);
  const createAlert = useCreateAlert();
  const blockMovie = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    if (!blocked) {
      createAlert({
        title: 'Спасибо за отметку',
        extra: 'Теперь мы будем показывать Вам меньше похожих фильмов',
      });
    }
    setBlocked((blocked) => !blocked);
  };
  return (
    <Button appearance={'square'} onClick={blockMovie}>
      {blocked ? <MdBlock fill={'var(--color-danger)'} /> : <MdBlock />}
    </Button>
  );
};
