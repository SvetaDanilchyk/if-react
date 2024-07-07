import { hotelsUrl } from "../const";

export const getHotels =  (value) => {
  const urlHotels = new URL(hotelsUrl);
  urlHotels.searchParams.append("search", value);
  const res =  fetch(urlHotels).then((hotels) => hotels.json());

  return res;
};
