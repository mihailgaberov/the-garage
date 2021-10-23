import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

export interface VehicleSlotProps {
  licenseNumber: string;
  vehicleType: 'Car' | 'Motorbike';
  levelNumber: number;
  slotNumber: number;
}

const VehicleSlot: FunctionComponent<VehicleSlotProps> = ({
                                                            levelNumber,
                                                            slotNumber,
                                                            licenseNumber,
                                                            vehicleType}) => {
  return (
    <Container>
      <div className='first-row'>
        <span>{licenseNumber}</span>
        <span>Level {levelNumber}</span>
      </div>
      <div className='second-row'>
        <span>{vehicleType}</span>
        <span>Slot: {slotNumber}</span>
      </div>
    </Container>
  );
};

export default VehicleSlot;