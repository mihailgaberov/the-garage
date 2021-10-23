import React, { FunctionComponent, useEffect, useState } from 'react';

import { Container } from './styles';
import Filters from "../FiltersContainer";
import VehiclesList from "../VehiclesList";
import { VehicleSlotProps } from "../VehicleSlot";

interface GarageData {
  slots: number;
  levels: number;
  vehicles: VehicleSlotProps[]
}

const MainView: FunctionComponent = () => {
  const [data, setData] = useState<GarageData>();

  useEffect(() => {
    const loadData = () => {
      fetch('data.json', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      ).then((response) => {
        return response.json();
      })
        .then((responseJson) => {
          setData(responseJson);
        });
    }

    loadData();
  }, []);

  const handleFiltering = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(">>>> handle filtering: ", e.currentTarget.value);

  };

  return (
    <Container>
      <Filters levelsCount={data?.levels} handleFiltering={handleFiltering} />
      <VehiclesList vehicles={data?.vehicles} />
    </Container>
  );
};

export default MainView;
