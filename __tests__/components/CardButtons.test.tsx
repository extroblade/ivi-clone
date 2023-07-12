import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import AddToFavoritesButton from '@/components/Buttons/CardButtons/AddToFavoritesButton';
import BlockButton from '@/components/Buttons/CardButtons/BlockButton';
import FindSimilarButton from '@/components/Buttons/CardButtons/FindSimilarButton';
import { Provider } from 'react-redux';
import RateButton from '@/components/Buttons/CardButtons/RateButton';
import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from '@/store/reducers/modals.slice';
import React from 'react';

const mockStore = configureStore({ reducer: { modalsReducer } });

describe('card buttons', () => {
  afterEach(() => cleanup());
  test('add to favorite before', async () => {
    render(<AddToFavoritesButton />);
    const button = screen.getByRole('button', { name: '' });
    expect(button).toMatchSnapshot();
  });
  test('add to favorite after', async () => {
    render(<AddToFavoritesButton />);
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
