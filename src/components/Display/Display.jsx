import styles from "./Display.module.scss";

import { Textfit } from "react-textfit";

import { useCalc } from "../../hooks/useCalc";

export default function Display() {
  const { calc, result } = useCalc();

  return (
    <Textfit className={styles.display}>
      {result ? <span>({result})</span> : ""} {calc || "0"}
    </Textfit>
  );
}
