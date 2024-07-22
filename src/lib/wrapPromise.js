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
    return await getHotels();
  } else {
    throw Error("Not implemented");
  }
}

export const wrapPromise = (promise) => {
  console.log("wrapPromise ", promise);
  if (promise.status === "fulfilled") {
    console.log("fulfilled", promise.status);
    return promise.value;
  } else if (promise.status === "rejected") {
    console.log("rejected", promise.status);
    throw promise.reason;
  } else if (promise.status === "pending") {
    console.log("pending", promise.status);
    throw promise;
  } else {
    promise.status = "pending";
    console.log("promise", promise);
    promise.then(
      (result) => {
        promise.status = "fulfilled";
        promise.value = result;
      },
      (reason) => {
        promise.status = "rejected";
        promise.reason = reason;
      },
    );
    throw promise;
  }
};
