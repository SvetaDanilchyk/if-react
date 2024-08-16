//constans
import { SEARCH_HOTELS } from "../../constans/searchHotels";
//services
import { hotelsUrl } from "../../services/const";

export const searchHotelsSuccess = (hotels, searchResults = null) => ({
  type: SEARCH_HOTELS.success,
  payload: hotels,
  searchResults,
});

export const searchHotelsFailure = (error) => ({
  type: SEARCH_HOTELS.error,
  payload: error,
});

export const searchHotels =
  (query = "") =>
  async (dispatch, getState) => {
    try {
      const urlHotels = new URL(hotelsUrl);
      urlHotels.searchParams.append("search", query);

      const response = await fetch(urlHotels);
      const data = await response.json();

      if (query) {
        dispatch(searchHotelsSuccess(getState().search.homeHotels, data));
      } else {
        dispatch(searchHotelsSuccess(data));
      }
    } catch (error) {
      dispatch(searchHotelsFailure(error.message));
    }
  };
