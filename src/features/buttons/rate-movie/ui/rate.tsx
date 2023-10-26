import { MouseEvent } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

import { setShowRating } from '@/shared/store';
import { Button } from '@/shared/ui';
import { AppearanceVariants } from '@/shared/ui/button/button.props';

export const RateButton = ({ appearance = 'transparent' }: { appearance?: AppearanceVariants }) => {
  const dispatch = useDispatch();
  const handleOpenRatingModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setShowRating(true));
  };
  return (
    <Button appearance={appearance} onClick={handleOpenRatingModal}>
      <AiOutlineStar />
    </Button>
  );
};
