/* eslint-disable react/react-in-jsx-scope */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('teste', () => {
    render(<App />);

    expect(screen.getByText('WEATHER')).toBeDefined();
  });
});
