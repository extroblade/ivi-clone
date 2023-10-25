import { RefObject, useEffect } from 'react';

export function useOutsideClick(handleClose: () => void, ref: RefObject<Element>) {
  useEffect(() => {
    function handleClickOutside({ target }: MouseEvent): void {
      if (!ref.current || ref.current.contains(target as Node)) {
        return;
      }
      handleClose();
    }
    document.addEventListener('mousedown', handleClickOutside);
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClose, ref]);
}
