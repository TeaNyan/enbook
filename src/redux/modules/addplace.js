import { all, put, takeLatest, call } from "redux-saga/effects";
import { getPlacesSuccessAppend } from "../modules/getplaces";

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
    meta: {
      thunk: true,
    },
  };
};

export const addPlaceLoading = () => {
  return {
    type: ADDPLACE_LOADING,
  };
};

export const addPlaceSuccess = (payload, meta) => {
  return {
    type: ADDPLACE_SUCCESS,
    payload: {
      data: payload.place,
    },
    meta,
  };
};

export const addPlaceError = (error, meta) => {
  return {
    type: ADDPLACE_ERROR,
    payload: {
      error,
    },
    meta,
    error: true,
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
function* doAddPlace({ payload, meta }) {
  try {
    yield put(addPlaceLoading());
    const [np] = yield all([call(Api.addPlace, payload.body)]);
    yield put(getPlacesSuccessAppend(np.data));
    yield put(addPlaceSuccess(np.data, meta));
  } catch (err) {
    yield put(addPlaceError(err, meta));
  }
}

export const sagas = function* () {
  yield takeLatest(ADDPLACE_REQUEST, doAddPlace);
};
