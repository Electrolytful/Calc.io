import { useEffect } from "react";
import { useCalcHistory } from "../../hooks/useCalcHistory.jsx";
import { clearCalculations } from "../../localStorage/functions.js";

import History from "../../components/History/History.jsx";

export default function HistoryPage() {
  const { calcHistory, dispatch } = useCalcHistory();

  const setTitle = () => {
    document.title = `Calc.io | History (${calcHistory.length})`;
  };

  const handleClearHistory = () => {
    dispatch({ type: "CLEAR_HISTORY" });
    clearCalculations();
    setTitle();
  };

  useEffect(() => {
    setTitle();
  }, []);

  return (
    <div className="historyPage">
      <h2>History ({calcHistory.length})</h2>
      <button className="historyPage__clear" onClick={handleClearHistory}>
        Clear History
      </button>
      <ul>
        {calcHistory.length ? (
          calcHistory.map((item, i) => <History key={i} content={item} />)
        ) : (
          <p className="historyPage__empty">
            Looks like there is no history. Try making some calculations and
            coming back.
          </p>
        )}
      </ul>
    </div>
  );
}
