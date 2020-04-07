import { all, put, takeLatest, call } from "redux-saga/effects";
import { push } from "connected-react-router";

import * as Api from "../../Api";

///////////////////////////////////////////////////////////////////////////////
//
// :: CONSTANTS
//
///////////////////////////////////////////////////////////////////////////////
const ADDPLACE_REQUEST = "ADDPLACE_REQUEST";
const ADDPLACE_LOADING = "ADDPLACE_LOADING";
const ADDPLACE_ERROR = "ADDPLACE_ERROR";
const ADDPLACE_SUCCESS = "ADDPLACE_SUCCESS";

///////////////////////////////////////////////////////////////////////////////
//
// :: ACTIONS
//
///////////////////////////////////////////////////////////////////////////////
export const addPlace = (body) => {
  return {
    type: ADDPLACE_REQUEST,
    payload: {
      body,
    },
  };
};

export const addPlaceLoading = () => {
  return {
    type: ADDPLACE_LOADING,
  };
};

export const addPlaceSuccess = (np) => {
  return {
    type: ADDPLACE_SUCCESS,
    payload: {
      data: np.place,
    },
  };
};

export const addPlaceError = (error) => {
  return {
    type: ADDPLACE_ERROR,
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
const defaultState = {
  newPlace: null,
  isLoading: false,
  error: null,
  success: false,
};

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADDPLACE_REQUEST:
      return defaultState;
    case ADDPLACE_LOADING:
      return { ...state, isLoading: true };
    case ADDPLACE_ERROR:
      return { isLoading: false, error: action.payload.error };
    case ADDPLACE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        newPlace: action.payload.data,
      };
    default:
      return state;
  }
};

///////////////////////////////////////////////////////////////////////////////
//
// :: SELECTORS
//
///////////////////////////////////////////////////////////////////////////////
export const selectAddPlaceRequest = (store) => store.addPlace;

///////////////////////////////////////////////////////////////////////////////
//
// :: SAGAS
//
///////////////////////////////////////////////////////////////////////////////
function* doAddPlace({ payload }) {
  try {
    yield put(addPlaceLoading());
    const [np] = yield all([call(Api.addPlace, payload.body)]);
    yield put(addPlaceSuccess(np.data));
    yield put(push("/places"));
  } catch (err) {
    yield put(addPlaceError(err));
  }
}

export const sagas = function* () {
  yield takeLatest(ADDPLACE_REQUEST, doAddPlace);
};
