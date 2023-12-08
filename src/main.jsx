import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";

import { BrowserRouter } from "react-router-dom";

import { CalcContextProvider } from "./context/CalcContext.jsx";
import { CalcHistoryContextProvider } from "./context/CalcHistoryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CalcContextProvider>
    <CalcHistoryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CalcHistoryContextProvider>
  </CalcContextProvider>
);
