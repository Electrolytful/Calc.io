import { createContext, useReducer } from "react";

export const CalcHistoryContext = createContext({
  calcHistory: [],
});

export const calcHistoryReducer = (state, action) => {
  switch (action.type) {
    case "SET_HISTORY":
      return {
        calcHistory: action.payload,
      };

    case "UPDATE_HISTORY":
      return {
        calcHistory: [...state.calcHistory, action.payload],
      };

    case "CLEAR_HISTORY":
      return {
        calcHistory: [],
      };

    default:
      return state;
  }
};

export const CalcHistoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcHistoryReducer, {
    calcHistory: [],
  });

  const context = {
    ...state,
    dispatch,
  };

  return (
    <CalcHistoryContext.Provider value={context}>
      {children}
    </CalcHistoryContext.Provider>
  );
};
