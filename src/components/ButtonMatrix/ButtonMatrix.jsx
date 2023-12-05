import styles from "./ButtonMatrix.module.scss";
import { useEffect } from "react";

import Button from "../Button/Button";

import { useCalc } from "../../hooks/useCalc.jsx";

const btnMatrix = [
    ["C", "DEL", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
];

const ops = ["/", "*", "+", "-", ".", "%"];

export default function ButtonMatrix() {
  const { calc, result, dispatch } = useCalc();

  useEffect(() => {
    const refreshResult = () => {
      if(calc != "" && !ops.includes(calc.slice(-1))) {
        dispatch({type: "UPDATE_RESULT", payload: eval(calc).toString()});
      }

      if(calc == "") {
        dispatch({type: "UPDATE_RESULT", payload: ""});
      }
    }
    refreshResult();
  }, [calc]);

  const calculate = () => {
    if(calc != "") {
      const payload = eval(calc).toString();
      dispatch({type: "SET_CALC", payload});
    }
  }

  const del = () => {
    if(calc != "") {
      const payload = calc.slice(0, -1);
      dispatch({type: "SET_CALC", payload});
    }
  }

  const reset = () => {
    if(calc != ""){
      dispatch({type: "SET_CALC", payload: ""});
    }
  }

  const handleClick = (value) => {
    if(ops.includes(value) && calc === "" || ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }

    if(value.toString() === "DEL") {
      del();
      return;
    }

    if(value.toString() === "=") {
      calculate();
      return;
    }

    if(value.toString() === "C") {
      reset();
      return;
    }

    dispatch({type: "UPDATE_CALC", payload: value.toString()});
  }

  return (
    <div className={styles.btnMatrix}>
        {btnMatrix.flat().map((btn, i) => (
            <Button value={btn} key={i} onClick={() => handleClick(btn)} />
        ))}
    </div>
  )
}
