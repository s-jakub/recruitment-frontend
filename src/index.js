import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./screens/LandingPage";
import "./styles/globalStyles.css";

import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <LandingPage />
    </Provider>
  </React.StrictMode>
);
