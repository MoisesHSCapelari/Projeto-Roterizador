import { all } from "redux-saga/effects";

import trip from "./trip/sagas";

export default function* rootSaga() {
  return yield all([trip]);
}
