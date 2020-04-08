import { all, put, takeLatest, call } from "redux-saga/effects";
import { pick } from "lodash";

import * as Api from "../../Api";

///////////////////////////////////////////////////////////////////////////////
//
// :: CONSTANTS
//
///////////////////////////////////////////////////////////////////////////////
const GETPLACES_REQUEST = "GETPLACES_REQUEST";
const GETPLACES_LOADING = "GETPLACES_LOADING";
const GETPLACES_ERROR = "GETPLACES_ERROR";
const GETPLACES_SUCCESS = "GETPLACES_SUCCESS";
const GETPLACES_SUCCESS_APPEND = "GETPLACES_SUCCESS_APPEND";

///////////////////////////////////////////////////////////////////////////////
//
// :: ACTIONS
//
///////////////////////////////////////////////////////////////////////////////
export const getPlaces = (userId) => {
  return {
    type: GETPLACES_REQUEST,
    payload: {
      userId,
    },
  };
};

export const getPlacesLoading = () => {
  return {
    type: GETPLACES_LOADING,
  };
};

export const getPlacesSuccess = (res) => {
  return {
    type: GETPLACES_SUCCESS,
    payload: {
      places: res.places,
    },
  };
};

export const getPlacesSuccessAppend = (place) => {
  return {
    type: GETPLACES_SUCCESS_APPEND,
    payload: {
      places: place,
    },
  };
};

export const getPlacesError = (error) => {
  return {
    type: GETPLACES_ERROR,
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
  places: null,
  isLoading: false,
  error: null,
  success: false,
};

export const reducer = (state = defaultState, action) => {
  const places = state.places
    ? [
        action.payload && action.payload.places && action.payload.places.place,
        ...state.places,
      ]
    : [action.payload && action.payload.places && action.payload.places.place];

  switch (action.type) {
    case GETPLACES_REQUEST:
      return defaultState;
    case GETPLACES_LOADING:
      return { ...state, isLoading: true };
    case GETPLACES_ERROR:
      return { isLoading: false, error: action.payload.error };
    case GETPLACES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        places: action.payload.places,
      };
    case GETPLACES_SUCCESS_APPEND:
      return {
        ...state,
        isLoading: false,
        success: true,
        places: places,
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
export const selectGetPlacesRequest = (store) => store.getPlaces;
export const selectPlaces = (store) => store.getPlaces.places;

///////////////////////////////////////////////////////////////////////////////
//
// :: SAGAS
//
///////////////////////////////////////////////////////////////////////////////
function* doGetPlaces({ payload }) {
  try {
    yield put(getPlacesLoading());
    const [places] = yield all([call(Api.getPlacesByUserId, payload.userId)]);
    yield put(getPlacesSuccess(places.data));
  } catch (err) {
    yield put(getPlacesError(err));
  }
}

export const sagas = function* () {
  yield takeLatest(GETPLACES_REQUEST, doGetPlaces);
};
