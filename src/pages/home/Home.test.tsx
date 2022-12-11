/* eslint-disable react/react-in-jsx-scope */
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from './Home';

describe('Home', () => {
  it('should have been rendered', () => {
    render(<Home />);

    expect(screen.getByText('WEATHER')).toBeDefined();
  });
});
