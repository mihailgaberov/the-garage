import React, { FunctionComponent, useEffect, useReducer, useState } from 'react';

import { Container } from './styles';
import Filters from "../FiltersContainer";
import VehiclesList from "../VehiclesList";
import { VehicleSlotProps } from "../VehicleSlot";
import { Filter } from "../Filters";
import FiltersReducer, { initialState } from "./FiltersReducer";
import { readRecord, storeToLocalStorage } from "../../utils/localStorageService";

interface GarageData {
  slots: number;
  levels: number;
  vehicles: VehicleSlotProps[]
}

export const FilterTypes = {
  TYPE: 'TYPE',
  LEVELS: 'LEVELS',
  SEARCH: 'SEARCH',
  RESET: 'RESET'
};

const LS_KEY: string = 'vehicles';

const MainView: FunctionComponent = () => {
    const [data, setData] = useState<GarageData>();
    const [state, dispatch] = useReducer(FiltersReducer, initialState);
    const [vehiclesData, setVehiclesData] = useState(data?.vehicles);
    const [resetFilters, setResetFilters] = useState(true);

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
                filteredData = filteredData?.length > 0 ? filteredData?.filter((vehicle: { vehicleType: string; }) => vehicle.vehicleType === filterValue) :
                  data?.filter((vehicle: { vehicleType: string; }) => vehicle.vehicleType === filterValue)
                break;
              case FilterTypes.LEVELS:
                const levelNumber: number = Number(filterValue.split(' ')[1]);
                filteredData = filteredData?.length > 0 ? filteredData?.filter((vehicle: { levelNumber: number; }) => vehicle.levelNumber === levelNumber) :
                  data?.filter((vehicle: { levelNumber: number; }) => vehicle.levelNumber === levelNumber);
                break;
              case FilterTypes.SEARCH:
                filteredData = filteredData?.length > 0 ? filteredData?.filter((vehicle: { licenseNumber: string; }) => vehicle.licenseNumber.includes(filterValue)) :
                  data?.filter((vehicle: { licenseNumber: string; }) => vehicle.licenseNumber.includes(filterValue));
                break;
            }
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
          const vehicleData = responseJson.vehicles;
          setData(responseJson);
          setVehiclesData(vehicleData);
          // Store all the vehicles data to the local storage
          storeToLocalStorage(LS_KEY, vehicleData);

        });
      }

      loadData();
    }, []);

    const handleFiltering = (filter: Filter) => {
      dispatch(filter);
      setResetFilters(false);
    };

    const handleResetFilters = () => {
      dispatch({type: FilterTypes.RESET, value: ''});
      setVehiclesData(data?.vehicles);
      setResetFilters(true);
    };

    return (
      <Container>
        <Filters isReset={resetFilters} resetFilters={handleResetFilters} levelsCount={data?.levels} handleFiltering={handleFiltering} />
        <VehiclesList vehicles={vehiclesData} />
      </Container>
    );
  };

export default MainView;
