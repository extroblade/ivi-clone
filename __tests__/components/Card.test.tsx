import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { emptyCard, mockCard, mockStore } from '@/shared/testdata';
import { Card, ShowAll } from '@/UI';

describe('card', () => {
  describe('params', () => {
    afterEach(() => cleanup());
    it('should has only star button', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} star />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    it('should has only find button', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} find />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    it('should has only block button', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} block />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    it('should has only book button', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} book />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    it('should has all available buttons', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} find star book block />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
    it('should not have hover', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={mockCard} hover={false} />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
  });
  describe('card object', () => {
    it('should not throw error with empty card', () => {
      const card = render(
        <Provider store={mockStore}>
          <Card card={emptyCard} hover={false} />
        </Provider>
      );
      expect(card).toMatchSnapshot();
    });
  });
});

describe('show all card', () => {
  it('should render show all card', () => {
    const card = render(<ShowAll />);
    expect(card).toMatchSnapshot();
  });
});
