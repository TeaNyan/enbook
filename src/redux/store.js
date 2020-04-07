import { createStore, applyMiddleware } from "redux";
import {
  connectRouter,
  routerMiddleware as createRouterMiddleware,
} from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { middleware as thunkMiddleware } from "redux-saga-thunk";

import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import createReducer from "./reducers";
import sagas from "./sagas";

const configureStore = (initialState, history) => {
  const rootReducer = createReducer({
    router: connectRouter(history),
  });
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);

  const middlewares = [routerMiddleware, thunkMiddleware, sagaMiddleware];

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagas.map(sagaMiddleware.run);

  return store;
};

export default configureStore;
