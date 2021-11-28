import { GET_CONTACTS_ATTEMPT, GET_CONTACTS_SUCCESS } from "../types";

const INITIAL_STATE = { contacts: [], loading: true, totalPages: 0 };
export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_CONTACTS_ATTEMPT:
      return { ...state, loading: true };

    case GET_CONTACTS_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
        contacts: action.contacts,
        totalPages: action.totalPages
      };

    default:
      return state;
  }
};