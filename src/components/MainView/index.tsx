import React, { FunctionComponent, useEffect, useReducer, useState } from 'react';

import { Container } from './styles';
import Filters from "../FiltersContainer";
import VehiclesList from "../VehiclesList";
import { VehicleSlotProps } from "../VehicleSlot";
import { Filter } from "../Filters";
import FiltersReducer, { initialState } from "./FiltersReducer";

interface GarageData {
  slots: number;
  levels: number;
  vehicles: VehicleSlotProps[]
}

export const FilterTypes = {
  INIT: 'INIT',
  TYPE: 'TYPE',
  LEVELS: 'LEVELS',
  SEARCH: 'SEARCH'
};

const MainView: FunctionComponent = () => {
    const [data, setData] = useState<GarageData>();
    const [state, dispatch] = useReducer(FiltersReducer, initialState);

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
        }).then((responseJson) => {
          setData(responseJson);
          dispatch({type: FilterTypes.INIT, value: responseJson.vehicles});
        });
      }

      loadData();
    }, []);

    const handleFiltering = (filter: Filter) => {
      dispatch(filter);
    };

    return (
      <Container>
        <Filters levelsCount={data?.levels} handleFiltering={handleFiltering} />
        <VehiclesList vehicles={state.vehiclesData} />
      </Container>
    );
  }
;

export default MainView;
