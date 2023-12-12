import { useEffect } from "react";
import { useCurrentPage } from "../../hooks/useCurrentPage";

import Calculator from "../../components/Calculator/Calculator";

export default function CalculatorPage() {
  const { setCurrentPage } = useCurrentPage();

  useEffect(() => {
    setCurrentPage("calculator");
  }, []);

  return (
    <div>
      <Calculator />
    </div>
  );
}
