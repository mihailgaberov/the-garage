import { FilterTypes } from "./index";
import { Filter } from "../Filters";

export const initialState = {
  appliedFilters: {
    SEARCH: '',
    LEVELS: '',
    TYPE: ''
  }
};

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
    case FilterTypes.RESET:
      return {
        ...state,
        appliedFilters: {
          ...state.appliedFilters,
          SEARCH: false,
          TYPE: false,
          LEVELS: false
        }
      };
    default:
      return state;
  }
};

export default reducer;
