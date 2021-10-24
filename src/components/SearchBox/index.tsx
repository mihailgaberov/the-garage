import React, { FunctionComponent } from 'react';
import { Container } from "./styles";
import { Filter } from "../Filters";
import { FilterTypes } from "../MainView";

interface SearchBoxProp {
  handleSearch: (filter: Filter) => void;
}

const SearchBox: FunctionComponent<SearchBoxProp> = ({ handleSearch }) => {
  return (
    <Container>
      <input type="text" onChange={(e) => handleSearch({ type: FilterTypes.SEARCH, value: e.currentTarget.value })} />
    </Container>
  );
};

export default SearchBox;
