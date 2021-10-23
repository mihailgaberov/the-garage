import React from 'react';
import { render, screen } from '@testing-library/react';

import MainView from './index';

test('renders MainView component containing child components inside', () => {
  render(<MainView />);
  const txtLevelsElement = screen.getByText(/LEVELS/i);
  expect(txtLevelsElement).toBeInTheDocument();
  const txtVehiclesElement = screen.getByText(/VEHICLES/i);
  expect(txtVehiclesElement).toBeInTheDocument();
});
