import { getHotels } from "../services/hotels";
import { hotelsUrl } from "../services/const";

const cache = new Map();

export function fetchData(url) {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }
  return cache.get(url);
}

async function getData(url) {
  if (url === hotelsUrl) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return await getHotels();
  } else {
    throw Error("Not implemented");
  }
}

export const wrapPromise = (promise) => {
  let status = "pending";
  let result;
  let error;

  const suspender = promise.then(
    (res) => {
      status = "fulfilled";
      result = res;
    },
    (err) => {
      status = "rejected";
      error = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "rejected") {
        throw error;
      } else if (status === "fulfilled") {
        return result;
      }
    },
  };
};
