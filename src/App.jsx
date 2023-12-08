import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import CalculatorPage from "./pages/CalculatorPage/CalculatorPage.jsx";
import HistoryPage from "./pages/HistoryPage/HistoryPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

import Layout from "./components/Layout/Layout.jsx";

import { useCalcHistory } from "./hooks/useCalcHistory.jsx";
import { getCalculations } from "./localStorage/functions.js";

export default function App() {
  const { dispatch } = useCalcHistory();

  useEffect(() => {
    const syncHistory = () => {
      const calculations = getCalculations();

      calculations && dispatch({ type: "SET_HISTORY", payload: calculations });
    };

    syncHistory();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CalculatorPage />} />
        <Route path="history" element={<HistoryPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}
