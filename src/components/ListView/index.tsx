import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import VehicleSlot, { VehicleSlotProps } from "../VehicleSlot";

interface ListViewProps {
  slots: VehicleSlotProps[];
}

const ListView: FunctionComponent<ListViewProps> = ({ slots }) => {
  return (
    <Container>
      {slots.map(slot => <VehicleSlot key={slot.licenseNumber}
                                      licenseNumber={slot.licenseNumber}
                                      vehicleType={slot.vehicleType}
                                      levelNumber={slot.levelNumber}
                                      slotNumber={slot.slotNumber} />
      )}
    </Container>
  );
};

export default ListView;