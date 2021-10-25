import React from 'react';
import { render, screen } from '@testing-library/react';

import VehiclesList from './index';

test('renders VehiclesList component correctly when no data is loaded', () => {
  render(<VehiclesList />);
  const txtElement = screen.getByText(/No data./i);
  expect(txtElement).toBeInTheDocument();
});

test('renders VehiclesList component correctly with data', () => {
  render(<VehiclesList vehicles={[
    {
      "licenseNumber": "XBZ 120",
      "vehicleType": "Car",
      "slotNumber": 1,
      "levelNumber": 1
    },
    {
      "licenseNumber": "XBZ 121",
      "vehicleType": "Motorbike",
      "slotNumber": 2,
      "levelNumber": 1
    }
  ]} />);
  const txtVehicles = screen.getByText(/Vehicles/i);
  expect(txtVehicles).toBeInTheDocument();
  const txtSlots = screen.getAllByText(/Slot:/i);
  expect(txtSlots.length).toEqual(2);
  const txtPlateNumber = screen.getByText(/XBZ 120/i);
  expect(txtPlateNumber).toBeInTheDocument();
});
