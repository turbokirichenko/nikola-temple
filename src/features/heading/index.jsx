import styles from "./styles.module.scss";
export default function Heading({ title = "" }) {
  return (
    <div className={styles["heading"]}>
      <h1 className={styles["heading__title"]}>{title}</h1>
    </div>
  );
}
