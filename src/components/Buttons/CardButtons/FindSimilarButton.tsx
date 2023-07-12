import React from 'react';
import { IoColorWandOutline } from 'react-icons/io5';
import styles from '@/UI/Card/Card.module.scss';
import { Button } from '@/UI/Button/Button';
import { useRouter } from 'next/navigation';

const FindSimilarButton = () => {
  const router = useRouter();

  const findSimilar = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    router.push('/movies');
  };
  return (
    <Button appearance={'square'} onClick={(e) => findSimilar(e)}>
      <IoColorWandOutline className={styles.mirrored} />
    </Button>
  );
};

export default FindSimilarButton;
