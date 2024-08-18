import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StaffProvider } from "./pages/Staff/StaffContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <StaffProvider>
        <App />
      </StaffProvider>
    </React.StrictMode>
  </BrowserRouter>
);
