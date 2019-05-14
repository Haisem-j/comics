import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Modal from "./components/Modal.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers/allReducers";

const app = document.getElementById("app");
const modal = document.getElementById("modalroot");
const store = createStore(allReducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
);
ReactDOM.render(
  <Provider store={store}>
    <Modal />
  </Provider>,
  modal
);
