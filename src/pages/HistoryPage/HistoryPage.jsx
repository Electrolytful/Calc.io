import styles from "./HistoryPage.module.scss";
import { useEffect } from "react";
import { useCalcHistory } from "../../hooks/useCalcHistory.jsx";
import { useCurrentPage } from "../../hooks/useCurrentPage.jsx";
import { clearCalculations } from "../../localStorage/functions.js";

import History from "../../components/History/History.jsx";

export default function HistoryPage() {
  const { calcHistory, dispatch } = useCalcHistory();
  const { setCurrentPage } = useCurrentPage();

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
    setCurrentPage("history");
  }, []);

  return (
    <div className={styles.historyPage}>
      <h2>History ({calcHistory.length})</h2>
      <button
        className={styles.historyPage__clear}
        onClick={handleClearHistory}
      >
        Clear History
      </button>

      {calcHistory.length ? (
        <ul className={styles.historyPage__list}>
          {calcHistory.map((item, i) => (
            <History key={i} content={item} />
          ))}
        </ul>
      ) : (
        <p className={styles.historyPage__empty}>
          Looks like there is no history. Try making some calculations and
          coming back.
        </p>
      )}
    </div>
  );
}
