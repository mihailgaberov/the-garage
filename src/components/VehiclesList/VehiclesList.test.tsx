import React from 'react';
import { render, screen } from '@testing-library/react';

import VehiclesList from './index';

test('renders VehiclesList component', () => {
  render(<VehiclesList />);
  const txtElement = screen.getByText(/VEHICLES/i);
  expect(txtElement).toBeInTheDocument();
});
