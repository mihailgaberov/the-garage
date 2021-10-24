import React, { FunctionComponent, useEffect, useRef } from 'react';
import { Container } from "./styles";
import { Filter } from "../Filters";
import { FilterTypes } from "../MainView";

interface SearchBoxProp {
  handleSearch: (filter: Filter) => void;
  isReset: boolean;
}

const SearchBox: FunctionComponent<SearchBoxProp> = ({ handleSearch, isReset }) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (isReset && formRef.current) {
      // @ts-ignore
      formRef.current.reset();
    }
  }, [isReset]);

  return (
    <Container>
      <form ref={formRef}>
      <input type="text" onChange={(e) => handleSearch({ type: FilterTypes.SEARCH, value: e.currentTarget.value })} />
      </form>
    </Container>
  );
};

export default SearchBox;
