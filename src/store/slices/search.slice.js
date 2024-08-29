import { createSlice } from "@reduxjs/toolkit";

//services
import { hotelsUrl } from "../../services/const";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    homeHotels: [],
    searchResults: [],
    error: null,
  },
  reducers: {
    fetchHomeHotelsSuccess(state, action) {
      state.homeHotels = action.payload;
    },
    fetchHotelsSuccess(state, action) {
      state.searchResults = action.payload;
    },
    fetchHotelsFailure(state, action) {
      state.error = action.payload;
    },
    resetSearchResults(state) {
      state.searchResults = [];
    },
  },
});

export const fetchHomeHotels = () => async (dispatch) => {
  try {
    const response = await fetch(hotelsUrl);
    const data = await response.json();
    dispatch(fetchHomeHotelsSuccess(data));
  } catch (error) {
    dispatch(fetchHotelsFailure(error.message));
  }
};

export const fetchHotels =
  (query = "") =>
  async (dispatch) => {
    try {
      const urlHotels = new URL(hotelsUrl);
      if (query) {
        urlHotels.searchParams.append("search", query);
      }
      const response = await fetch(urlHotels);
      const data = await response.json();
      dispatch(fetchHotelsSuccess(data));
    } catch (error) {
      dispatch(fetchHotelsFailure(error.message));
    }
  };

export const {
  fetchHomeHotelsSuccess,
  fetchHotelsSuccess,
  fetchHotelsFailure,
  resetSearchResults,
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
