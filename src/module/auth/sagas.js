import { push } from "connected-react-router";
import { all, put, takeLatest } from "redux-saga/effects";

import * as Actions from "./actions";
import * as Constants from "./constants";

export function* Logout() {
  yield put(push("/"));
  yield put(Actions.Logout.success());
}

export default function* root() {
  yield all([takeLatest(Constants.LOGOUT.REQUEST, Logout)]);
}
