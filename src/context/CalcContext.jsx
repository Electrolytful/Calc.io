import { createContext, useReducer } from "react";

export const CalcContext = createContext({
  calc: "",
  result: "",
  allowDecimal: true,
});

export const calcReducer = (state, action) => {
  switch (action.type) {
    case "SET_CALC":
      return {
        calc: action.payload,
        result: state.result,
        allowDecimal: state.allowDecimal,
      };

    case "UPDATE_CALC":
      return {
        calc: state.calc + action.payload,
        result: state.result,
        allowDecimal: state.allowDecimal,
      };

    case "UPDATE_RESULT":
      return {
        calc: state.calc,
        result: action.payload,
        allowDecimal: state.allowDecimal,
      };

    case "SET_ALLOW_DECIMAL_TRUE":
      return {
        calc: state.calc,
        result: state.result,
        allowDecimal: true,
      };

    case "SET_ALLOW_DECIMAL_FALSE":
      return {
        calc: state.calc,
        result: state.result,
        allowDecimal: false,
      };

    default:
      return state;
  }
};

export const CalcContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calcReducer, {
    calc: "",
    result: "",
    allowDecimal: true,
  });

  const context = {
    ...state,
    dispatch,
  };

  return (
    <CalcContext.Provider value={context}>{children}</CalcContext.Provider>
  );
};
