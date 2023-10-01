import Link from 'next/link';

import styles from './breadcrumbs.module.scss';
import { BreadcrumbsProps } from './breadcrumbs.props';

export const Breadcrumbs = ({ breadcrumbs, variant = 'primary' }: BreadcrumbsProps) => {
  return (
    <div className={styles.container}>
      <ul className={styles.breadcrumbs}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className={styles[variant]}>
            {index === breadcrumbs.length - 1 && variant === 'primary' ? (
              <span>{breadcrumb.name}</span>
            ) : (
              <Link href={breadcrumb.path}>{breadcrumb.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
