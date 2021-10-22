import React, { FunctionComponent } from 'react';
import { Container } from "./styles";

interface SearchBoxProp {
  handleSearch: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchBox: FunctionComponent<SearchBoxProp> = ({ handleSearch }) => {
  return (
    <Container>
      <input type="text" onChange={handleSearch} />
    </Container>
  );
};

export default SearchBox;
