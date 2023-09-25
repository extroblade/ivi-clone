import { render } from '@testing-library/react';
import React from 'react';

import { Breadcrumbs } from '@/newui';
import { Breadcrumb } from '@/newui/breadcrumbs/breadcrumbs.props';

const breadcrumbsMockData: Breadcrumb[] = [
  { name: 'breadcrumb1', path: '/' },
  { name: 'breadcrumb2', path: '/movies' },
  { name: 'breadcrumb3', path: '/movies' },
];

describe('primary breadcrumbs', () => {
  it('should match snapshot', () => {
    const bc = render(<Breadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
  it('should not throw error with empty error', () => {
    const bc = render(<Breadcrumbs breadcrumbs={[]} />);
    expect(bc).toMatchSnapshot();
  });
});

describe('movie breadcrumbs', () => {
  it('should be correct with 3', () => {
    const bc = render(<Breadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
  it('should not throw error with empty error', () => {
    const bc = render(<Breadcrumbs variant={'movie'} breadcrumbs={[]} />);
    expect(bc).toMatchSnapshot();
  });
});
