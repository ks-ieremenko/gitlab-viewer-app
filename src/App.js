import React from "react";
import MainPage from "./containers/MainPage";
import useNotifier from "./store/useNotifier";
import { ErrorHandler } from "./ErrorHandler";

const App = () => {
  useNotifier();
  return (
    <ErrorHandler>
      <MainPage />
    </ErrorHandler>
  );
};

export default App;
