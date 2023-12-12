import { useContext } from "react";
import { CurrentPageContext } from "../context/CurrentPageContext";

export const useCurrentPage = () => {
  const context = useContext(CurrentPageContext);

  if (!context) {
    throw error(
      "useCurrentPage must be used inside of a CurrentPageContextProvider"
    );
  }

  return context;
};
