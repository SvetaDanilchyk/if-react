import { hotelsUrl } from "../const";

export const getHotels = async () => {
  const urlHotels = new URL(hotelsUrl);
  urlHotels.searchParams.append("search", "");
  const response = await fetch(urlHotels);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const hotels = await response.json();
  console.log("getHotels response:", hotels);
  return hotels;
};
