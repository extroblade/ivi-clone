import { Button } from '@/UI/Button/Button';
import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Button', () => {
  it('should be circle', () => {
    render(<Button appearance={'circle'}>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('circle');
    expect(button).toMatchSnapshot();
  });
  it('should be red', () => {
    render(<Button appearance={'red'}>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('red');
    expect(button).toMatchSnapshot();
  });
  it('should be square', () => {
    render(<Button appearance={'square'}>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('square');
    expect(button).toMatchSnapshot();
  });
  it('should be rectangle', () => {
    render(<Button appearance={'rectangle'}>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('rectangle');
    expect(button).toMatchSnapshot();
  });
  it('should be rectangle default', () => {
    render(<Button>btn</Button>);
    const button = screen.getByRole('button', { name: /btn/i });
    expect(button).toHaveClass('rectangle');
    expect(button).toMatchSnapshot();
  });
});
