//constans
import { AUTH } from "../../constans/actionTypec";
import { INITIAL_STATE } from "../../constans/initialState";

export const authReducer = (state = INITIAL_STATE.auth, action) => {
  switch (action.type) {
    case AUTH.setStatus:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};
