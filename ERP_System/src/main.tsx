import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { StaffProvider } from "./pages/Staff/StaffContext.tsx";
import { Provider } from "react-redux";
import { store } from "../src/redux/store.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <StaffProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </StaffProvider>
    </React.StrictMode>
  </BrowserRouter>
);
