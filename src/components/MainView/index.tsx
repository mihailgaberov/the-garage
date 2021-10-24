import React, { FunctionComponent, useEffect, useReducer, useState } from 'react';

import { Container } from './styles';
import Filters from "../FiltersContainer";
import VehiclesList from "../VehiclesList";
import { VehicleSlotProps } from "../VehicleSlot";
import { Filter } from "../Filters";
import FiltersReducer, { initialState, LS_KEY } from "./FiltersReducer";
import { readRecord } from "../../utils/localStorageService";

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
    const [vehiclesData, setVehiclesData] = useState(data?.vehicles);

    useEffect(() => {
      function applyFilters() {
        const data: [] = readRecord(LS_KEY);

        let filteredData: any[] = [];
        const appliedFilters = state.appliedFilters;

        for (let p in appliedFilters) {
          const filterValue = appliedFilters[p];
          if (filterValue) {
            switch (p) {
              case FilterTypes.TYPE:
                filteredData = filteredData.length > 0 ? filteredData?.filter((vehicle: { vehicleType: string; }) => vehicle.vehicleType === filterValue) :
                  data?.filter((vehicle: { vehicleType: string; }) => vehicle.vehicleType === filterValue)
                break;
              case FilterTypes.LEVELS:
                const levelNumber: number = Number(filterValue.split(' ')[1]);
                filteredData = filteredData.length > 0 ? filteredData?.filter((vehicle: { levelNumber: number; }) => vehicle.levelNumber === levelNumber) :
                  data?.filter((vehicle: { levelNumber: number; }) => vehicle.levelNumber === levelNumber);
                break;
              case FilterTypes.SEARCH:
                filteredData = filteredData.length > 0 ? filteredData?.filter((vehicle: { licenseNumber: string; }) => vehicle.licenseNumber.includes(filterValue)) :
                  data?.filter((vehicle: { licenseNumber: string; }) => vehicle.licenseNumber.includes(filterValue));
                break;
            }
            console.log('do filtering by: ', p, filterValue);
            setVehiclesData(filteredData);
          }
        }

      }

      applyFilters()
    }, [state]);

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
          setVehiclesData(responseJson.vehicles);
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
        <VehiclesList vehicles={vehiclesData} />
      </Container>
    );
  }
;

export default MainView;
