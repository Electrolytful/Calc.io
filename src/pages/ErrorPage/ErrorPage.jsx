import styles from "./ErrorPage.module.scss";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 Not Found";
  }, []);

  return (
    <main className={styles.error}>
      <div className={styles.error_container}>
        <h1>404</h1>
        <h2>Looks like you're lost</h2>
        <p>The page you are looking for does not exist or is unavailable!</p>
      </div>
      <button className={styles.btn} onClick={() => navigate("/")}>
        Back to Calc.io
      </button>
    </main>
  );
}
