import { combineReducers } from "redux";
import { reducer as login } from "./modules/login";
import { reducer as logout } from "./modules/logout";
import { reducer as me } from "./modules/me";
import { reducer as signup } from "./modules/signup";

export default (asyncReducers) => {
  return combineReducers({
    login,
    me,
    logout,
    signup,
    ...asyncReducers,
  });
};
