import { useRouter } from 'next/navigation';
import { FC, MouseEvent } from 'react';
import { IoColorWandOutline } from 'react-icons/io5';

import { Button } from '@/newui';
import { AppearanceVariants } from '@/newui/button/button.props';

export const FindSimilarButton: FC<{ appearance?: AppearanceVariants }> = ({ appearance }) => {
  const router = useRouter();
  const findSimilar = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push('/movies'); //todo
  };
  return (
    <Button appearance={appearance} onClick={findSimilar}>
      <IoColorWandOutline style={{ transform: 'scale(-1, 1)' }} />
    </Button>
  );
};
