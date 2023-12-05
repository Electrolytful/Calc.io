import styles from "./Layout.module.scss";

import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <h1>Calc.io</h1>
        <ul>
          <li>
            <NavLink to="/">Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
        </ul>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <h2>Developed by Erhan</h2>
      </footer>
    </>
  );
}
