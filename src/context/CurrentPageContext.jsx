import { createContext, useState } from "react";

export const CurrentPageContext = createContext();

export const CurrentPageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("calculator");

  const context = {
    currentPage,
    setCurrentPage,
  };

  return (
    <CurrentPageContext.Provider value={context}>
      {children}
    </CurrentPageContext.Provider>
  );
};
