import React from 'react';
import { render, screen } from '@testing-library/react';

import ListView from './index';

test('renders ListView component', () => {
  render(<ListView slots={[
    {licenseNumber: 'XBZ 123', vehicleType: 'Car', slotNumber: 12, levelNumber: 3},
    {licenseNumber: 'X - M 879', vehicleType: 'Motorbike', slotNumber: 2, levelNumber: 1}
  ]} />);
  const txtLicenseElement1 = screen.getByText(/XBZ 123/i);
  expect(txtLicenseElement1).toBeInTheDocument();
  const txtLicenseElement2 = screen.getByText(/X - M 879/i);
  expect(txtLicenseElement2).toBeInTheDocument();

  const txtLevelElement = screen.getByText(/Level 3/i);
  expect(txtLevelElement).toBeInTheDocument();

  const txtSlotElement = screen.getByText(/Slot: 2/i);
  expect(txtSlotElement).toBeInTheDocument();

  const txtVehicleTypeElement = screen.getByText(/Motorbike/i);
  expect(txtVehicleTypeElement).toBeInTheDocument();

});
