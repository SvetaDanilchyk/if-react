import { hotelsUrl } from "../const";

export const getHotels = async (value) => {
  const urlHotels = new URL(hotelsUrl);
  urlHotels.searchParams.append("search", value);
  const res = await fetch(urlHotels);

  return res.json();
};
