import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import { StyledArrow } from "./StyledArrow";

const PaginationControls: FunctionComponent = () => {
  return (
    <Container>
      <div className='current-count'>
        <span>1</span><span>10</span>
      </div>
      <div className='separator'>/</div>
      <div className='total-count'>
        100
      </div>
      <div className='text'>
        Vehicles
      </div>
      <div className='controls'>
        <button onClick={() => console.log('paginate back')}><StyledArrow direction='up' isEnabled={false} /></button>
        <button onClick={() => console.log('paginate forward')}><StyledArrow direction='down' isEnabled={true} /></button>
      </div>
    </Container>
  );
};

export default PaginationControls;