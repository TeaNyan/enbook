import { combineReducers } from "redux";
import { reducer as login } from "./modules/login";
import { reducer as logout } from "./modules/logout";
import { reducer as me } from "./modules/me";
import { reducer as signup } from "./modules/signup";
import { reducer as addPlace } from "./modules/addplace";
import { reducer as getPlaces } from "./modules/getplaces";

export default (asyncReducers) => {
  return combineReducers({
    login,
    me,
    logout,
    signup,
    addPlace,
    getPlaces,
    ...asyncReducers,
  });
};
