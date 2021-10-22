import React from 'react';
import { Container } from "./styles";
import SearchBox from "../SearchBox";
import Filters from "../Filters";

const FiltersContainer = () => {
  return (
    <Container>
      <SearchBox handleSearch={(e) => console.log('Search for: ', e.currentTarget.value)} />
      <Filters title="LEVELS" data={['Level 1', 'Level 2', 'Level 3']} />
      <Filters title="TYPE" data={['Car', 'Motorbike']} />
    </Container>
  );
};

export default FiltersContainer;
