import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import { history } from "../services";

import AuthReducer from "../module/auth/reducer";

const rootReducer = combineReducers({
  router: connectRouter(history),
  auth: AuthReducer,
});

export default rootReducer;
