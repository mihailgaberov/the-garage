import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import PaginationControls from "../PaginationControls";
import ListView from "../ListView";

const VehiclesList: FunctionComponent = () => {
  return (
    <Container>
      <PaginationControls totalCount={100} handlePaginate={(direction) => console.log("Paginate to: ", direction)} />
      <ListView />
    </Container>
  );
};

export default VehiclesList;
