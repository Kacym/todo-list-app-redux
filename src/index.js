import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { authStore, todoStore } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={todoStore}>
        <Provider store={authStore}>
          <App />
        </Provider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
