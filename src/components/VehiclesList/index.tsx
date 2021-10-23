import React, { FunctionComponent, useEffect, useState } from 'react';
import { Container } from "./styles";
import PaginationControls from "../PaginationControls";
import ListView from "../ListView";
import { VehicleSlotProps } from "../VehicleSlot";

interface VehiclesListProps {
  vehicles?: VehicleSlotProps[];
}

export enum PaginationDirections {
  'BACK',
  'FORWARD'
}
const VISIBLE_VEHICLES_PAGE_PAGE: number = 10;

const VehiclesList: FunctionComponent<VehiclesListProps> = ({ vehicles }) => {
  const [visibleVehicles, setVisibleVehicles] = useState<VehicleSlotProps[]>([]);
  const [pageNum, setPageNum] = useState(0);

  useEffect(() => {
    setPaginatedVehicles(pageNum);
  }, [vehicles])

  const getVisibleVehicles = (allVehicles: VehicleSlotProps[], pageNum: number): VehicleSlotProps[] => {
    const startSlice: number = pageNum === 0 ? 0 : pageNum * VISIBLE_VEHICLES_PAGE_PAGE;
    const endSlice: number = startSlice + VISIBLE_VEHICLES_PAGE_PAGE;
    return allVehicles.slice(startSlice, endSlice);
  };

  const setPaginatedVehicles = (pageNum: number) => {
    if (vehicles) {
      setVisibleVehicles(getVisibleVehicles(vehicles, pageNum));
    }
  };

  const handlePaginate = (direction: PaginationDirections) => {
    if (direction === PaginationDirections.BACK) {
      if (pageNum > 0) {
        setPageNum(prevPageNum => {
          const newPageNum: number = prevPageNum - 1;
          setPaginatedVehicles(newPageNum);
          return newPageNum;
        });
      }
    } else if (direction === PaginationDirections.FORWARD) {
      if (vehicles && pageNum + 1 < vehicles?.length / VISIBLE_VEHICLES_PAGE_PAGE) {
        setPageNum(prevPageNum => {
          const newPageNum: number = prevPageNum + 1;
          setPaginatedVehicles(newPageNum);
          return newPageNum;
        });
      }
    }
  };

  return (
    <Container>
      <PaginationControls totalCount={vehicles?.length} handlePaginate={handlePaginate} />
      <ListView vehicles={visibleVehicles} />
    </Container>
  );
};

export default VehiclesList;
