import cn from 'classnames';
import { MdArrowBackIosNew } from 'react-icons/md';

import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

export const Prev = ({ onClick, className }: { onClick?: () => void; className?: string }) => {
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={cn(styles.arrow, styles.prev)}>
        <Button
          size={'L'}
          appearance={'transparent'}
          disabled={className ? className.split(' ')[2] === 'slick-disabled' : false}
        >
          <MdArrowBackIosNew size={30} />
        </Button>
      </div>
    </div>
  );
};
