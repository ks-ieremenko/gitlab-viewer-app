import { put, takeEvery, takeLatest, all, call } from "redux-saga/effects";
import {
  createProjectFail,
  createProjectSuccess,
  fetchProjectsFail,
  fetchProjectsSuccess,
  requestProjects,
  deleteProjectSuccess,
  deleteProjectFail,
  GET_PROJECTS,
  CREATE_PROJECT,
  DELETE_PROJECT,
} from "./project.action";

import { getProjects, createProject, deleteProject } from "../../api/project";
import { enqueueSnackbar } from "../notify/notify.action";

function* getProjectsSaga() {
  try {
    const projects = yield call(getProjects);
    yield put(fetchProjectsSuccess(projects.data));
    yield put(enqueueSnackbar("Projects are successfully loaded", "success"));
  } catch (error) {
    console.error(error.message);
    yield put(fetchProjectsFail(error.message));
    yield put(enqueueSnackbar(error.message, "error"));
  }
}

function* createProjectsSaga(action) {
  try {
    yield call(createProject, action.name);
    yield put(createProjectSuccess());
    yield put(
      enqueueSnackbar("Project has been successfully created", "success")
    );
    yield put(requestProjects());
  } catch (error) {
    console.error(error.message);
    yield put(createProjectFail(error.message));
    yield put(enqueueSnackbar(error.message, "error"));
  }
}

function* deleteProjectsSaga(action) {
  try {
    const project = yield call(deleteProject, action.id);
    yield put(deleteProjectSuccess(project));
    yield put(
      enqueueSnackbar("Project has been successfully deleted", "success")
    );
    yield put(requestProjects());
  } catch (error) {
    console.error(error.message);
    yield put(deleteProjectFail(error.message));
    yield put(enqueueSnackbar(error.message, "error"));
  }
}

export default function* project() {
  yield all([
    takeEvery(GET_PROJECTS, getProjectsSaga),
    takeLatest(CREATE_PROJECT, createProjectsSaga),
    takeLatest(DELETE_PROJECT, deleteProjectsSaga),
  ]);
  // yield all([takeEvery(DOWNLOAD_RATING, downloadRatingSaga)]);
}
