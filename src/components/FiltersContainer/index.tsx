import React, { FunctionComponent, useEffect, useState } from 'react';
import { Container } from "./styles";
import SearchBox from "../SearchBox";
import Filters from "../Filters";

interface FiltersContainerProps {
  levelsCount?: number
  handleFiltering: (e: React.FormEvent<HTMLInputElement>) => void;
}

const FiltersContainer: FunctionComponent<FiltersContainerProps> = ({ levelsCount, handleFiltering }) => {

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
      <SearchBox handleSearch={(e) => console.log('Search for: ', e.currentTarget.value)} />
      <Filters title="LEVELS" data={levels} handleFiltering={handleFiltering} />
      <Filters title="TYPE" data={['Car', 'Motorbike']} handleFiltering={handleFiltering} />
    </Container>
  );
};

export default FiltersContainer;
