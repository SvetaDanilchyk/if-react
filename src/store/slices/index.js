import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

//slice
import { authReducer } from "./auth.slice";
import { searchReducer } from "./search.slice";
import { userReducer } from "./user.slice";

//services
import { hotelApi } from "../../services/hotelApi/hotelApi";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "user"],
};

const rootReducer = combineReducers({
  [hotelApi.reducerPath]: hotelApi.reducer,
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
