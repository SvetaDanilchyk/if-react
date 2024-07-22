import { hotelsUrl } from "../const";

export const getHotels = async () => {
  const urlHotels = new URL(hotelsUrl);
  urlHotels.searchParams.append("search", '');
  const res = fetch(urlHotels).then((hotels) => hotels.json());

  console.log('res - ', res);
  return res;
};
