//constans
import { AUTH } from "../../constans/actionTypec";

export const setAuthStatus = (status) => ({
  type: AUTH.setStatus,
  payload: status,
});
