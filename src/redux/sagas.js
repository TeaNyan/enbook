import { sagas as login } from "./modules/login";
import { sagas as me } from "./modules/me";
import { sagas as logout } from "./modules/logout";
import { sagas as signup } from "./modules/signup";
import { sagas as addPlace } from "./modules/addplace";
import { sagas as getPlaces } from "./modules/getplaces";

export default [login, me, logout, signup, addPlace, getPlaces];
