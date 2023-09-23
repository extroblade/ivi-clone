import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { Carousel } from '@/UI';

import { mockCard, mockStore } from './Card.test';

const testArray = Array(10).fill(mockCard);

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
