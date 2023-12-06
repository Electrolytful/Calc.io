import { Routes, Route } from "react-router-dom";

import CalculatorPage from "./pages/CalculatorPage/CalculatorPage.jsx";
import HistoryPage from "./pages/HistoryPage/HistoryPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

import Layout from "./components/Layout/Layout.jsx";

import { CalcContextProvider } from "./context/CalcContext.jsx";

export default function App() {
  return (
      <CalcContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CalculatorPage />} />
            <Route path="history" element={<HistoryPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </CalcContextProvider>
  );
}
