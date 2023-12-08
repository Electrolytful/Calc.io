import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";

export const useCalc = () => {
  const context = useContext(CalcContext);

  if (!context) {
    throw error("useCalc must be used inside of a CalcContextProvider");
  }

  return context;
};
