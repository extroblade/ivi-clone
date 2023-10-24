import cn from 'classnames';
import { MdArrowForwardIos } from 'react-icons/md';

import { Button } from '@/shared/ui';

import styles from './styles.module.scss';

export const Next = ({ onClick, className }: { onClick?: () => void; className?: string }) => {
  return (
    <div onClick={onClick} className={styles.arrow_container}>
      <div className={cn(styles.arrow, styles.next)}>
        <Button
          size={'L'}
          appearance={'transparent'}
          disabled={className ? className.split(' ')[2] === 'slick-disabled' : false}
        >
          <MdArrowForwardIos size={30} />
        </Button>
      </div>
    </div>
  );
};
