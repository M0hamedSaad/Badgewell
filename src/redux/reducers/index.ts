import { combineReducers } from "redux";
import userState from "./auth";
import registerState from "./register";
import contactsState from "./getContacts";

export default combineReducers({
  userState,
  registerState,
  contactsState
});
