import { FilterTypes } from "./index";
import { Filter } from "../Filters";
import { storeToLocalStorage } from "../../utils/localStorageService";

export const initialState = {
  appliedFilters: {
    SEARCH: '',
    LEVELS: '',
    TYPE: ''
  }
};
export const LS_KEY: string = 'vehicles';

const reducer = (state: any, action: Filter) => {
  const value = action.value;

  switch (action.type) {
    case FilterTypes.LEVELS:
      return {
        ...state,
        appliedFilters: {...state.appliedFilters, LEVELS: value }
      };
    case FilterTypes.TYPE:
      return {
        ...state,
        appliedFilters: {...state.appliedFilters, TYPE: value }
      };
    case FilterTypes.SEARCH:
      return {
        ...state,
        appliedFilters: {...state.appliedFilters, SEARCH: value }
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
