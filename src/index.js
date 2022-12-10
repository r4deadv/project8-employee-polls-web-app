import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";
import middleware from "./redux/middleware";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(reducer, composeWithDevTools(middleware));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
