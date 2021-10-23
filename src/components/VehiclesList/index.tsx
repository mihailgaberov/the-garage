import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import PaginationControls from "../PaginationControls";
import ListView from "../ListView";

const VehiclesList: FunctionComponent = () => {
  return (
    <Container>
      <PaginationControls />
      <ListView />
    </Container>
  );
};

export default VehiclesList;
