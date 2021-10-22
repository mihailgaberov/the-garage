import React from 'react';
import { render, screen } from '@testing-library/react';

import Header from './index';

test('renders header component with text', () => {
  render(<Header />);
  const txtElement = screen.getByText(/Vehicles/i);
  expect(txtElement).toBeInTheDocument();
});
