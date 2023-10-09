import { FC, MouseEvent } from 'react';
import { MdBlock } from 'react-icons/md';

import { Button } from '@/newui';
import { AppearanceVariants } from '@/newui/button/button.props';
import { useBooleanState } from '@/shared/hooks';
import { useCreateAlert } from '@/shared/hooks/useCreateAlert';

export const BlockButton: FC<{ appearance?: AppearanceVariants }> = ({
  appearance = 'transparent',
}) => {
  const [isBlocked, { handleToggle }] = useBooleanState();
  const createAlert = useCreateAlert();
  const handleBlock = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isBlocked) {
      createAlert({
        title: 'Спасибо за отметку',
        extra: 'Теперь мы будем показывать Вам меньше похожих фильмов',
      });
    }
    handleToggle();
  };
  return (
    <Button appearance={appearance} onClick={handleBlock}>
      {isBlocked ? <MdBlock fill={'var(--color-danger)'} /> : <MdBlock />}
    </Button>
  );
};
