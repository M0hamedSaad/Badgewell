import { SIGNUP_SUCCESS, SIGNUP_ATTEMPT } from "../types";

const INITIAL_STATE = { register: null, loading: false };
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SIGNUP_ATTEMPT:
      return { ...INITIAL_STATE, loading: true };

    case SIGNUP_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        register: action.register,
      };

    default:
      return state;
  }
};