import { authReducer } from "./auth.reducer";
import { searchReducer } from "./search.reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = {
  auth: authReducer,
  user: userReducer,
  search: searchReducer,
};
