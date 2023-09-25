import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { mockCard, mockStore } from '@/shared/testdata';
import { Carousel } from '@/UI';

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
