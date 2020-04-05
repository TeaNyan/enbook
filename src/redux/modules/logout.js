import { put, takeLatest, call } from "redux-saga/effects";
import { push as navigateTo } from "connected-react-router";

import { fetchMeSuccess } from "./me";
import * as Api from "../../Api";

///////////////////////////////////////////////////////////////////////////////
//
// :: CONSTANTS
//
///////////////////////////////////////////////////////////////////////////////
const LOGOUT_REQUEST = "LOGOUT_REQUEST";
const LOGOUT_LOADING = "LOGOUT_LOADING";
const LOGOUT_ERROR = "LOGOUT_ERROR";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

///////////////////////////////////////////////////////////////////////////////
//
// :: ACTIONS
//
///////////////////////////////////////////////////////////////////////////////
export const logout = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutLoading = () => {
  return {
    type: LOGOUT_LOADING,
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutError = (error) => {
  return {
    type: LOGOUT_ERROR,
    payload: {
      error,
    },
  };
};

///////////////////////////////////////////////////////////////////////////////
//
// :: REDUCER
//
///////////////////////////////////////////////////////////////////////////////
const defaultState = { isLoading: false, error: null, success: false };

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGOUT_REQUEST:
      return defaultState;
    case LOGOUT_LOADING:
      return { ...state, isLoading: true };
    case LOGOUT_ERROR:
      return { isLoading: false, error: action.payload.error };
    case LOGOUT_SUCCESS:
      return { ...state, isLoading: false, success: true };
    default:
      return state;
  }
};

///////////////////////////////////////////////////////////////////////////////
//
// :: SELECTORS
//
///////////////////////////////////////////////////////////////////////////////
export const selectLogoutRequest = (store) => store.logout;

///////////////////////////////////////////////////////////////////////////////
//
// :: SAGAS
//
///////////////////////////////////////////////////////////////////////////////
function* doLogout() {
  try {
    yield put(logoutLoading());
    yield call(Api.logout);
    yield put(fetchMeSuccess(null));
    yield put(logoutSuccess());
    //yield put(navigateTo("/"));
  } catch (err) {
    yield put(logoutError(err));
  }
}

export const sagas = function* () {
  yield takeLatest(LOGOUT_REQUEST, doLogout);
};
