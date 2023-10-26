import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AddToFavoritesButton } from 'src/features/buttons/add-movie-to-favorites';

import { BlockButton } from '@/features/buttons/block-movie';
import { FindSimilarButton } from '@/features/buttons/find-similar-movie';
import { RateButton } from '@/features/buttons/rate-movie';
import { mockStore } from '@/shared/testdata';

describe('card buttons', () => {
  afterEach(() => cleanup());
  test('add to favorite before', async () => {
    render(
      <Provider store={mockStore}>
        <AddToFavoritesButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: '' });
    expect(button).toMatchSnapshot();
  });
  test('add to favorite after', async () => {
    render(
      <Provider store={mockStore}>
        <AddToFavoritesButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: '' });
    fireEvent.click(button);
    expect(button).toMatchSnapshot();
  });
  test('block before', () => {
    render(
      <Provider store={mockStore}>
        <BlockButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: '' });

    expect(button).toMatchSnapshot();
  });
  test('block after', () => {
    render(
      <Provider store={mockStore}>
        <BlockButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: '' });
    fireEvent.click(button);
    expect(button).toMatchSnapshot();
  });
  test('find similar before', () => {
    render(<FindSimilarButton />);
    const button = screen.getByRole('button', { name: '' });
    expect(button).toMatchSnapshot();
  });
  test('find similar after', () => {
    render(<FindSimilarButton />);
    const button = screen.getByRole('button', { name: '' });
    fireEvent.click(button);
    expect(button).toMatchSnapshot();
  });
  test('rate button before', () => {
    render(
      <Provider store={mockStore}>
        <RateButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: '' });
    expect(button).toMatchSnapshot();
  });
  test('rate button after', () => {
    render(
      <Provider store={mockStore}>
        <RateButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: '' });
    fireEvent.click(button);
    expect(button).toMatchSnapshot();
  });
});
