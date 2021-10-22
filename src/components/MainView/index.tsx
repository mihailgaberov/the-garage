import React, { FunctionComponent } from 'react';

import { Container } from './styles';
import Filters from "../FiltersContainer";
import VehiclesList from "../VehiclesList";

const MainView: FunctionComponent = () => {
  return (
    <Container>
      <Filters />
      <VehiclesList />
    </Container>
  );
};

export default MainView;
