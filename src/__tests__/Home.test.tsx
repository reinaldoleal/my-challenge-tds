/* eslint-disable react/react-in-jsx-scope */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../pages/home/Home';

describe('Home', () => {
  it('should have been rendered', () => {
    render(<Home selectCity={() => {}} />);

    expect(screen.getByText('Dallol')).toBeDefined();
    expect(screen.getByText('Fairbanks')).toBeDefined();
    expect(screen.getByText('London')).toBeDefined();
    expect(screen.getByText('Recife')).toBeDefined();
    expect(screen.getByText('Vancouver')).toBeDefined();
    expect(screen.getByText('Yakutsk')).toBeDefined();
  });
});
