import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import PaginationControls from "../PaginationControls";
import ListView from "../ListView";
import { VehicleSlotProps } from "../VehicleSlot";

interface VehiclesListProps {
  vehicles?: VehicleSlotProps[];
  totalCount?: number;
}

const VehiclesList: FunctionComponent<VehiclesListProps> = ({ vehicles, totalCount }) => {
  return (
    <Container>
      <PaginationControls totalCount={totalCount}
                          handlePaginate={(direction) => console.log("Paginate to: ", direction)} />
      <ListView vehicles={vehicles} />
    </Container>
  );
};

export default VehiclesList;
