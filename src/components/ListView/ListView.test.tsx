import React from 'react';
import { render, screen } from '@testing-library/react';

import ListView from './index';

test('renders ListView component', () => {
  render(<ListView />);
  const txtElement = screen.getByText(/List view here.../i);
  expect(txtElement).toBeInTheDocument();
});
