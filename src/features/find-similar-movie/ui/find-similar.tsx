import { useRouter } from 'next/navigation';
import { FC, MouseEvent } from 'react';
import { IoColorWandOutline } from 'react-icons/io5';

import { Button } from '@/newui';
import { AppearanceVariants } from '@/newui/button/button.props';

export const FindSimilarButton: FC<{ appearance?: AppearanceVariants; id?: string | number }> = ({
  appearance = 'transparent',
  id,
}) => {
  const router = useRouter();
  const findSimilar = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!id) {
      return;
    }
    router.push(`/similar/${id}`);
  };
  return (
    <Button appearance={appearance} onClick={findSimilar}>
      <IoColorWandOutline style={{ transform: 'scale(-1, 1)' }} />
    </Button>
  );
};
