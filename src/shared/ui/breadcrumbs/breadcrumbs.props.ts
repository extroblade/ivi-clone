export type Breadcrumb = {
  name: string;
  path: string;
};

export type BreadcrumbsProps = {
  breadcrumbs: Breadcrumb[];
  variant?: 'primary' | 'movie';
};
