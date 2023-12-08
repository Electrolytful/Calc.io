import styles from "./Calculator.module.scss";

import Display from "../Display/Display";
import ButtonMatrix from "../ButtonMatrix/ButtonMatrix";

export default function Calculator() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonMatrix />
    </div>
  );
}
