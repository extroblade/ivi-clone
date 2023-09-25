import React from 'react';

import { Button } from '@/newui';
export const AddNewMovie = () => {
  const create = () => {
    console.log('mock creation');
  };
  return (
    <div>
      <Button onClick={create}>add</Button>
      <div> doesnt work until finish backend part </div>
    </div>
  );
};
