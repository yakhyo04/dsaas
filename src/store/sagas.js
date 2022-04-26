import { all, fork } from "redux-saga/effects";

import AuthSaga from "../module/auth/sagas";

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
