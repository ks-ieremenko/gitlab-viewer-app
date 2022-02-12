import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { projectsReducer } from "./store/project/project.reducer";

import { SnackbarProvider } from "notistack";
import root from "./store/rootSaga";
import notifyReducer from "./store/notify/notify.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ projects: projectsReducer, notification: notifyReducer }),
  applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(root);

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.getElementById("root")
);
