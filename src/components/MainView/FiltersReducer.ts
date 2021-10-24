import { FilterTypes } from "./index";
import { Filter } from "../Filters";
import { readRecord, storeToLocalStorage } from "../../utils/localStorageService";

export const initialState = { vehiclesData: [] , appliedFilters: []};
const LS_KEY: string = 'vehicles';

const addAppliedFilter = (state: { appliedFilters: string[]; }, filterType: string) => {
  if (state.appliedFilters.length < 3) {
    return [...state.appliedFilters, filterType];
  } else {

  }
  const [, ...rest] = state.appliedFilters;
  return [...rest, filterType];
};

const reducer = (state: any, action: Filter) => {
  const filterType = action.type;
  const value = action.value;
  const lastAppliedFilter = state.appliedFilters[state.appliedFilters.length - 1];
  const dataToBeFiltered = lastAppliedFilter === filterType ?
    { vehiclesData: readRecord(LS_KEY) } :
    state;

  switch (action.type) {
    case FilterTypes.LEVELS:
      const levelNumber: number = Number(value.split(' ')[1]);
      return {
        ...dataToBeFiltered,
        appliedFilters: addAppliedFilter(state, filterType),
        vehiclesData: dataToBeFiltered.vehiclesData?.filter((vehicle: { levelNumber: number; }) => vehicle.levelNumber === levelNumber)
      };
    case FilterTypes.TYPE:
      return {
        ...dataToBeFiltered,
        appliedFilters: addAppliedFilter(state, filterType),
        vehiclesData: dataToBeFiltered.vehiclesData?.filter((vehicle: { vehicleType: string; }) => vehicle.vehicleType === value)
      };
    case FilterTypes.SEARCH:
      return {
        ...dataToBeFiltered,
        appliedFilters: addAppliedFilter(state, filterType),
        vehiclesData: dataToBeFiltered.vehiclesData?.filter((vehicle: { licenseNumber: string; }) => vehicle.licenseNumber.includes(value))
      };
    case FilterTypes.INIT:
      // Store all the vehicles data to the local storage
      storeToLocalStorage(LS_KEY, value);

      return {
        ...state,
        vehiclesData: value
      };
    default:
      return state;
  }

};

export default reducer;
