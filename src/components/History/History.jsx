import styles from "./History.module.scss";

export default function History({ content }) {
  return (
    <li className={styles.history}>
      <p className={styles.history__content}>{content}</p>
    </li>
  );
}
