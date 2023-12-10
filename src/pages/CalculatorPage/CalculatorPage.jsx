import styles from "./CalculatorPage.module.scss";
import Calculator from "../../components/Calculator/Calculator";

export default function CalculatorPage() {
  return (
    <div className={styles.calculatorPage}>
      <Calculator />
    </div>
  );
}
