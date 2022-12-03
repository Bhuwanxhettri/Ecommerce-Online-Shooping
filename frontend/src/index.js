import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
          <App />
          <ToastContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
