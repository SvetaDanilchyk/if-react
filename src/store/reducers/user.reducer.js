//constans
import { USER } from "../../constans/actionTypec";
import { INITIAL_STATE } from "../../constans/initialState";

export const userReducer = (state = INITIAL_STATE.user, action) => {
  switch (action.type) {
    case USER.set:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};
