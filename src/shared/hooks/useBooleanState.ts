import { Dispatch, SetStateAction, useCallback, useState } from 'react';

type ReturnType = {
  handleToggle: () => void;
  handleOpen: () => void;
  handleClose: () => void;
  handleState: Dispatch<SetStateAction<boolean>>;
};

export const useBooleanState = (initialState?: boolean): [boolean, ReturnType] => {
  const [state, setState] = useState<boolean>(initialState || false);
  const handleToggle = useCallback(() => {
    setState((prev) => !prev);
  }, []);
  const handleOpen = useCallback(() => {
    setState(() => true);
  }, []);
  const handleClose = useCallback(() => {
    setState(() => false);
  }, []);
  return [state, { handleToggle, handleOpen, handleClose, handleState: setState }];
};
