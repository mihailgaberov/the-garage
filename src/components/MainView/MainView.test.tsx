import React from 'react';
import { render, screen } from '@testing-library/react';

import MainView from './index';

test('renders MainView component containing child components inside', () => {
  render(<MainView />);
  const txtLevelsElement = screen.getByText(/LEVELS/i);
  expect(txtLevelsElement).toBeInTheDocument();
  const txtResetFilters = screen.getByText(/Reset Filters/i);
  expect(txtResetFilters).toBeInTheDocument();
  const txtType = screen.getByText(/TYPE/i);
  expect(txtType).toBeInTheDocument();
  const txtCar = screen.getByText(/Car/i);
  expect(txtCar).toBeInTheDocument();
  const txtMotorbike = screen.getByText(/Motorbike/i);
  expect(txtMotorbike).toBeInTheDocument();
});
