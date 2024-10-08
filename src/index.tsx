import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./reset.css";
import "./default.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store()}>
    <App />
  </Provider>
);
