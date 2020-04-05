import { all, put, takeLatest, call } from "redux-saga/effects";

import { fetchMeSuccess } from "./me";
import * as Api from "../../Api";

///////////////////////////////////////////////////////////////////////////////
//
// :: CONSTANTS
//
///////////////////////////////////////////////////////////////////////////////
const SIGNUP_REQUEST = "SIGNUP_REQUEST";
const SIGNUP_LOADING = "SIGNUP_LOADING";
const SIGNUP_ERROR = "SIGNUP_ERROR";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

///////////////////////////////////////////////////////////////////////////////
//
// :: ACTIONS
//
///////////////////////////////////////////////////////////////////////////////
export const signup = (name, email, password) => {
  return {
    type: SIGNUP_REQUEST,
    payload: {
      email,
      password,
      name,
    },
  };
};

export const signupLoading = () => {
  return {
    type: SIGNUP_LOADING,
  };
};

export const signupSuccess = () => {
  return {
    type: SIGNUP_SUCCESS,
    payload: {
      success: true,
    },
  };
};

export const signupError = (error) => {
  return {
    type: SIGNUP_ERROR,
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
    case SIGNUP_REQUEST:
      return defaultState;
    case SIGNUP_LOADING:
      return { ...state, isLoading: true };
    case SIGNUP_ERROR:
      return { isLoading: false, error: action.payload.error, success: false };
    case SIGNUP_SUCCESS:
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
export const selectSignupRequest = (store) => store.signup;

///////////////////////////////////////////////////////////////////////////////
//
// :: SAGAS
//
///////////////////////////////////////////////////////////////////////////////
function* doSignup({ payload }) {
  try {
    yield put(signupLoading());
    const [me] = yield all([
      call(Api.signup, payload.name, payload.email, payload.password),
    ]);
    console.log("me", me);
    yield put(fetchMeSuccess(me.data));
    yield put(signupSuccess());
  } catch (err) {
    console.log(err);
    yield put(signupError(err));
  }
}

export const sagas = function* () {
  yield takeLatest(SIGNUP_REQUEST, doSignup);
};
