//constans
import { SEARCH_HOTELS } from "../../constans/searchHotels";

const initialState = {
  homeHotels: [],
  searchResults: [],
  error: null,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_HOTELS.success:
      return {
        ...state,
        homeHotels: action.payload,
        searchResults: action.searchResults || state.searchResults,
      };
    case SEARCH_HOTELS.error:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
