import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import VehicleSlot, { VehicleSlotProps } from "../VehicleSlot";

interface ListViewProps {
  vehicles?: VehicleSlotProps[];
}

const ListView: FunctionComponent<ListViewProps> = ({ vehicles }) => {
  return (
    <Container>
      {vehicles?.map(vehicle => <VehicleSlot key={vehicle.licenseNumber}
                                         licenseNumber={vehicle.licenseNumber}
                                         vehicleType={vehicle.vehicleType}
                                         levelNumber={vehicle.levelNumber}
                                         slotNumber={vehicle.slotNumber} />
      )}
    </Container>
  );
};

export default ListView;