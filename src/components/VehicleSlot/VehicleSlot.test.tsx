import React from 'react';
import { render, screen } from '@testing-library/react';

import VehicleSlot from './index';

test('renders VehicleSlot component', () => {
  render(<VehicleSlot vehicleType={'Car'} levelNumber={3} licenseNumber={'XBZ 123'} slotNumber={12} />);
  const txtCarElement = screen.getByText(/Car/i);
  expect(txtCarElement).toBeInTheDocument();
  const txtLicenseNumberElement = screen.getByText(/XBZ 123/i);
  expect(txtLicenseNumberElement).toBeInTheDocument();
  const txtLevelElement = screen.getByText(/Level 3/i);
  expect(txtLevelElement).toBeInTheDocument();
  const txtSlotElement = screen.getByText(/Slot: 12/i);
  expect(txtSlotElement).toBeInTheDocument();
});
