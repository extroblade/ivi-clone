import { FC } from 'react';
import styles from '@/UI/Breadcrumbs/Breadcrumbs.module.scss';
import Link from 'next/link';
import { BreadcrumbsProps } from '@/UI/Breadcrumbs/Breadcrumbs.props';

const MovieBreadcrumbs: FC<BreadcrumbsProps> = ({ breadcrumbs = [] }): JSX.Element => {
  return (
    <div className={styles.container}>
      <ul className={styles.breadcrumbs}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`${styles.breadcrumbs__movie__item} ${index && styles.not_first}`}
          >
            <Link href={breadcrumb.path}>{breadcrumb.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieBreadcrumbs;
