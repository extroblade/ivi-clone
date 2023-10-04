import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';
import { IoColorWandOutline } from 'react-icons/io5';

import { Button } from '@/newui';

export const FindSimilarButton = () => {
  const router = useRouter();
  const findSimilar = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    router.push('/movies');
  };
  return (
    <Button appearance={'square'} onClick={findSimilar}>
      <IoColorWandOutline style={{ transform: 'scale(-1, 1)' }} />
    </Button>
  );
};
