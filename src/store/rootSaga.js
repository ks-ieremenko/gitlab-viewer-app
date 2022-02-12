import { all, fork } from "redux-saga/effects";
import project from "./project/project.saga";
// import notifySaga from "./notify/notify.saga";

export default function* root() {
  yield all([fork(project)]);
}
