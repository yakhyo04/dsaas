/* eslint-disable import/no-anonymous-default-export */
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import config from "../connections";

import middleware, { sagaMiddleware } from "./middleware";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

export default (_initialState = {}) => {
  const composeEnhancer =
    process.env.NODE_ENV === "development" ? composeWithDevTools({}) : compose;

  Object.keys(localStorage).forEach((key) => {
    const matches = key.match(/persist:version-(.*)/);

    if (!matches || matches.length < 2) {
      return;
    }
    const version = matches[1];

    if (version !== config.app.version) {
      localStorage.removeItem(key);
    }
  });

  const persistConfig = {
    key: `version-${config.app.version}`,
    storage,
    whitelist: [],
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    composeEnhancer(applyMiddleware(...middleware))
  );
  const persist = persistStore(store);

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(require("./reducers"));
    });
  }

  return { store, persist };
};
