import { pick } from "lodash";
import { all, put, takeLatest, call } from "redux-saga/effects";
import * as Api from "../../Api";

///////////////////////////////////////////////////////////////////////////////
//
// :: CONSTANTS
//
///////////////////////////////////////////////////////////////////////////////
const FETCH_ME_REQUEST = "FETCH_ME_REQUEST";
const FETCH_ME_LOADING = "FETCH_ME_LOADING";
const FETCH_ME_ERROR = "FETCH_ME_ERROR";
const FETCH_ME_SUCCESS = "FETCH_ME_SUCCESS";

///////////////////////////////////////////////////////////////////////////////
//
// :: ACTIONS
//
///////////////////////////////////////////////////////////////////////////////
export const fetchMe = () => {
  return {
    type: FETCH_ME_REQUEST,
  };
};

export const fetchMeLoading = () => {
  return {
    type: FETCH_ME_LOADING,
  };
};

export const fetchMeSuccess = (data) => {
  return {
    type: FETCH_ME_SUCCESS,
    payload: {
      data,
    },
  };
};

export const fetchMeError = (error) => {
  return {
    type: FETCH_ME_ERROR,
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
const defaultState = { data: null, isLoading: false, error: null };

// in order to avoid race condition before the loading state is triggered
// on initial render, we set the initial state to contain loading flag
export const reducer = (
  state = { ...defaultState, isLoading: true },
  action
) => {
  switch (action.type) {
    case FETCH_ME_REQUEST:
      return defaultState;
    case FETCH_ME_LOADING:
      return { ...state, isLoading: true };
    case FETCH_ME_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    case FETCH_ME_SUCCESS:
      return { ...state, isLoading: false, data: action.payload.data };
    default:
      return state;
  }
};

///////////////////////////////////////////////////////////////////////////////
//
// :: SELECTORS
//
///////////////////////////////////////////////////////////////////////////////
export const selectMeRequest = (store) =>
  pick(store.me, ["isLoading", "error"]);

export const selectMe = (store) => store.me.data;

///////////////////////////////////////////////////////////////////////////////
//
// :: SAGAS
//
///////////////////////////////////////////////////////////////////////////////
function* doFetchMe() {
  try {
    yield put(fetchMeLoading());
    const [me] = yield all([call(Api.getMe)]);
    yield put(fetchMeSuccess(me.data));
  } catch (err) {
    yield put(fetchMeError(err));
  }
}

export const sagas = function* () {
  yield takeLatest(FETCH_ME_REQUEST, doFetchMe);
};
