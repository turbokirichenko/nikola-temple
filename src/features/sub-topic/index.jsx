import styles from "./styles.module.scss";
export default function SubTopic({ title = "" }) {
  return (
    <div className={styles["sub-topic"]}>
      <h4 className={styles["sub-topic__title"]}>{title.toUpperCase()}</h4>
    </div>
  );
}
