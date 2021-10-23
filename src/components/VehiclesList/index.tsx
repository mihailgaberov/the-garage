import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import PaginationControls from "../PaginationControls";
import ListView from "../ListView";

const VehiclesList: FunctionComponent = () => {
  return (
    <Container>
      <PaginationControls totalCount={100} handlePaginate={(direction) => console.log("Paginate to: ", direction)} />
      <ListView slots={[
        {licenseNumber: 'XBZ 123', vehicleType: 'Car', slotNumber: 12, levelNumber: 3}
      ]} />
    </Container>
  );
};

export default VehiclesList;
