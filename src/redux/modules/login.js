import { all, put, takeLatest, call } from "redux-saga/effects";

import { fetchMeSuccess } from "./me";
import * as Api from "../../Api";

///////////////////////////////////////////////////////////////////////////////
//
// :: CONSTANTS
//
///////////////////////////////////////////////////////////////////////////////
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_LOADING = "LOGIN_LOADING";
const LOGIN_ERROR = "LOGIN_ERROR";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

///////////////////////////////////////////////////////////////////////////////
//
// :: ACTIONS
//
///////////////////////////////////////////////////////////////////////////////
export const login = (email, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      email,
      password,
    },
  };
};

export const loginLoading = () => {
  return {
    type: LOGIN_LOADING,
  };
};

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
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
const defaultState = { isLoading: false, error: null };

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return defaultState;
    case LOGIN_LOADING:
      return { ...state, isLoading: true };
    case LOGIN_ERROR:
      return { isLoading: false, error: action.payload.error };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

///////////////////////////////////////////////////////////////////////////////
//
// :: SELECTORS
//
///////////////////////////////////////////////////////////////////////////////
export const selectLoginRequest = (store) => store.login;

///////////////////////////////////////////////////////////////////////////////
//
// :: SAGAS
//
///////////////////////////////////////////////////////////////////////////////
function* doLogin({ payload }) {
  try {
    yield put(loginLoading());
    const [me] = yield all([call(Api.login, payload.email, payload.password)]);
    yield put(fetchMeSuccess(me.data));
    yield put(loginSuccess());
  } catch (err) {
    yield put(loginError(err));
  }
}

export const sagas = function* () {
  yield takeLatest(LOGIN_REQUEST, doLogin);
};
