// import { LOGIN_ATTEMPT, LOGOUT, LOGIN_SUCCESS } from "../types";

// const INITIAL_STATE = { user: null, loading: false };
// export default (state = INITIAL_STATE, action: any) => {
//   switch (action.type) {
//     case LOGIN_ATTEMPT:
//       return { ...state, loading: true };

//     case LOGIN_SUCCESS:
//       return { ...state, user: action.user, loading: false };

//     case LOGOUT:
//       return { ...INITIAL_STATE };

//     default:
//       return state;
//   }
// };

import { LOGIN_ATTEMPT, LOGOUT, LOGIN_SUCCESS } from "../types";

const INITIAL_STATE = { user: null, loading: false };
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return { ...INITIAL_STATE, loading: true };
    case LOGIN_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        user: action.user,
      };

    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };

    default:
      return state;
  }
};