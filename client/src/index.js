import React from "react";
import ReactDOM from "react-dom";

import jwtDecode from "jwt-decode";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { logout, setAuthToken } from "./actions/session";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  const token = localStorage.getItem("jwtToken");

  if (token) {
    // Restore session if token exists
    setAuthToken(token);
    const decoded = jwtDecode(token);
    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decoded,
      },
    };
    store = configureStore(preloadedState);

    // Logout if token has expired
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      store.dispatch(logout());
    }
  } else {
    store = configureStore();
  }

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});
