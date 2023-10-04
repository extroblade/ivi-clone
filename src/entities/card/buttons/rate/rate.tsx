import { MouseEvent } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { Button } from '@/newui';
import { setShowRating } from '@/shared/store';

export const RateButton = () => {
  const dispatch = useDispatch();
  const handleOpenRatingModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setShowRating(true));
  };
  return (
    <Button appearance={'square'} onClick={handleOpenRatingModal}>
      <AiOutlineStar />
    </Button>
  );
};
