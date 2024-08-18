import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/store.ts";
import stores from "./redux/stores.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={stores}>
      <Provider store={store}>
        <BrowserRouter>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </BrowserRouter>
      </Provider>
    </Provider>
  </StrictMode>
);
