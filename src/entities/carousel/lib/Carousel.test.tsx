import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { Carousel } from '@/entities/carousel';
import { mockStore } from '@/shared/testdata';

describe('carousel', () => {
  test('number array', () => {
    const carousel = render(
      <Provider store={mockStore}>
        <Carousel title={'title'}> </Carousel>
      </Provider>
    );
    expect(carousel).toMatchSnapshot();
  });
});
