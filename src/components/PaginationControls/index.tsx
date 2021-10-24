import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import { StyledArrow } from "./StyledArrow";
import { PaginationDirections } from "../VehiclesList";

interface PaginationControlsProps {
  totalCount?: number;
  pageNum: number;
  handlePaginate: (direction: PaginationDirections) => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const PaginationControls: FunctionComponent<PaginationControlsProps> = ({
                                                                          totalCount,
                                                                          pageNum,
                                                                          handlePaginate,
                                                                          hasNext,
                                                                          hasPrev
                                                                        }) => {
  return (
    <Container>
      <div className='current-count'><span>{pageNum}</span><span>{totalCount && Math.ceil(totalCount / 10)}</span></div>
      <div className='separator'>/</div>
      <div className='total-count'>{totalCount}</div>
      <div className='text'>Vehicles</div>
      <div className='controls'>
        <button onClick={() => handlePaginate(PaginationDirections.BACK)}>
          <StyledArrow direction='up' isEnabled={hasPrev} />
        </button>
        <button onClick={() => handlePaginate(PaginationDirections.FORWARD)}>
          <StyledArrow direction='down' isEnabled={hasNext} />
        </button>
      </div>
    </Container>
  );
};

export default PaginationControls;