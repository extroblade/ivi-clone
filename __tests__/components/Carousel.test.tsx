import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { Carousel } from '@/UI';

import { mockStore } from './Card.test';

const testArray = { total: 1, items: [1, 2, 3, 4, 5] };

describe('carousel', () => {
  test('number array', () => {
    const carousel = render(
      <Provider store={mockStore}>
        <Carousel title={'title'} movies={testArray} />
      </Provider>
    );
    expect(carousel).toMatchSnapshot();
  });
});
