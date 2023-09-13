import { render } from '@testing-library/react';
import React from 'react';

import { Carousel } from '@/UI';

const testArray = [1, 2, 3, 4, 5];

describe('carousel', () => {
  test('number array', () => {
    const carousel = render(<Carousel title={'title'} movies={testArray} />);
    expect(carousel).toMatchSnapshot();
  });
});
