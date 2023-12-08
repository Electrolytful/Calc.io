import { useContext } from "react";
import { CalcHistoryContext } from "../context/CalcHistoryContext";

export const useCalcHistory = () => {
  const context = useContext(CalcHistoryContext);

  if (!context) {
    throw Error("useHistory must be used within a HistoryContextProvider");
  }

  return context;
};
