import React, { FunctionComponent, useEffect, useState } from 'react';
import { Container } from "./styles";
import SearchBox from "../SearchBox";
import Filters, { Filter } from "../Filters";

interface FiltersContainerProps {
  levelsCount?: number
  handleFiltering: (filter: Filter) => void;
  resetFilters: () => void;
  isReset: boolean;
}

const FiltersContainer: FunctionComponent<FiltersContainerProps> = ({ levelsCount, handleFiltering, resetFilters, isReset }) => {

  const [levels, setLevels] = useState<string[]>([]);

  useEffect(() => {
    const generateLevelsFilterOptions = (levelsCount: number) => {
      const levelsArr: string[] = [];

      for (let i = 0; i < levelsCount; i++) {
        levelsArr.push('Level ' + (i + 1));
      }

      setLevels(levelsArr);
    };

    if (levelsCount) {
      generateLevelsFilterOptions(levelsCount);
    }
  }, [levelsCount]);

  return (
    <Container>
      <SearchBox handleSearch={handleFiltering} isReset={isReset} />
      <Filters title="LEVELS" data={levels} handleFiltering={handleFiltering} isReset={isReset} />
      <Filters title="TYPE" data={['Car', 'Motorbike']} handleFiltering={handleFiltering} isReset={isReset} />
      <button onClick={resetFilters} type='reset'>Reset Filters</button>
    </Container>
  );
};

export default FiltersContainer;
