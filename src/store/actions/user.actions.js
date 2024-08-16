//const
import { USER } from "../../constans/actionTypec";

export const setUser = (payload) => ({
  type: USER.set,
  payload,
});
