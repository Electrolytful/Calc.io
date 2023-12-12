import styles from "./ButtonMatrix.module.scss";
import { useEffect } from "react";

import { useCalc } from "../../hooks/useCalc.jsx";
import { useCalcHistory } from "../../hooks/useCalcHistory.jsx";
import { storeCalculation } from "../../localStorage/functions.js";

import Button from "../Button/Button";

// 2D array used to render all the button components of the calculator, see map function in the return statement
const btnMatrix = [
  ["C", "DEL", "%", "/"],
  [7, 8, 9, "*"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

// used for calculator logic
const ops = ["/", "*", "+", "-", ".", "%"];
// values that could cause potential crashes and errors with calculations
const dangerValues = ["NaN", "Infinity"];

export default function ButtonMatrix() {
  const { calc, allowDecimal, dispatch } = useCalc();
  const { dispatch: historyDispatch } = useCalcHistory();

  useEffect(() => {
    // function that constantly keeps the "result" state updated as the user inputs their calculation
    const refreshResult = () => {
      if (calc != "" && !ops.includes(calc.slice(-1))) {
        dispatch({ type: "UPDATE_RESULT", payload: eval(calc).toString() });
      }

      if (calc == "") {
        dispatch({ type: "UPDATE_RESULT", payload: "" });
      }
    };

    // function that updates the pages title with the current calculation being inputted
    const updateTitle = () => {
      document.title = `Calc.io ${calc ? "|" : ""} ${calc ? calc : ""}`;
    };

    refreshResult();
    updateTitle();
  }, [calc]);

  // function that is called when "=" is clicked
  // sets the "calc" state to be equal to the "result" state and also adds the calculation to local storage
  // updates the global history state to be reflected in the history page
  const calculate = () => {
    if (calc != "" && !dangerValues.includes(calc)) {
      const result = eval(calc).toString();
      storeCalculation(calc, result);

      dispatch({ type: "SET_CALC", payload: result });
      historyDispatch({
        type: "UPDATE_HISTORY",
        payload: `${calc} = ${result}`,
      });
    }
  };

  // function that is called when "DEL" is clicked
  // removes the last input value
  // if the value removed was a decimal point, sets the "allowDecimal" state to true
  const del = () => {
    if (calc != "" && !dangerValues.includes(calc)) {
      const payload = calc.slice(0, -1);
      dispatch({ type: "SET_CALC", payload });

      calc.slice(-1).toString() === "." &&
        dispatch({ type: "SET_ALLOW_DECIMAL_TRUE" });
    }
  };

  // function that is called when "C" is clicked
  // resets the global "calc" and "allowDecimal" states to its original values
  const reset = () => {
    if (calc != "") {
      dispatch({ type: "SET_CALC", payload: "" });
      dispatch({ type: "SET_ALLOW_DECIMAL_TRUE" });
    }
  };

  // click handler function that is called whenever a calculator button is clicked
  const handleClick = (value) => {
    // break out of function if the value inputted is an:
    // operator and there is no other value inputted
    // operator and the previous value was also an operator
    // a decimal point and the value of the "allowDecimal" global state is false
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1))) ||
      (value.toString() === "." && !allowDecimal)
    ) {
      return;
    }

    if (value.toString() === "DEL") {
      del();
      return;
    }

    if (value.toString() === "=") {
      calculate();
      return;
    }

    if (value.toString() === "C" || dangerValues.includes(calc)) {
      reset();
      return;
    }

    // set "allowDecimal" state to false when a decimal point is inputted
    if (value.toString() === ".") {
      dispatch({ type: "SET_ALLOW_DECIMAL_FALSE" });
    }

    // set "allowDecimal" state to true if an operator is inputted and is not a decimal point
    if (ops.includes(value.toString()) && value.toString() != ".") {
      dispatch({ type: "SET_ALLOW_DECIMAL_TRUE" });
    }

    // update the value of "calc" state to the value of the button clicked
    dispatch({ type: "UPDATE_CALC", payload: value.toString() });
  };

  return (
    <div className={styles.btnMatrix}>
      {btnMatrix.flat().map((btn, i) => (
        <Button value={btn} key={i} onClick={() => handleClick(btn)} />
      ))}
    </div>
  );
}
