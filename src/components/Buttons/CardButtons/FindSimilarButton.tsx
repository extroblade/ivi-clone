import { useRouter } from 'next/navigation';
import React from 'react';
import { IoColorWandOutline } from 'react-icons/io5';

import { Button } from '@/UI';

export const FindSimilarButton = () => {
  const router = useRouter();

  const findSimilar = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    router.push('/movies');
  };
  return (
    <Button appearance={'square'} onClick={(e) => findSimilar(e)}>
      <IoColorWandOutline style={{ transform: 'scale(-1, 1)' }} />
    </Button>
  );
};
