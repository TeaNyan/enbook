import { combineReducers } from "redux";
import { reducer as login } from "./modules/login";
import { reducer as me } from "./modules/me";

export default () => {
  return combineReducers({
    login,
    me,
  });
};
