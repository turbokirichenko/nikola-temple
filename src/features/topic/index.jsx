import styles from "./styles.module.scss";
export default function Topic({ title = "" }) {
  return (
    <div className={styles["topic"]}>
      <h3 className={styles["topic__title"]}>{title.toUpperCase()}</h3>
    </div>
  );
}
