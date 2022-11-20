import styles from "./styles.module.scss";
export default function InternalImage({ imageSrc }) {
  return (
    <div className={styles["internal-image"]}>
      <img className={styles["internal-image__source"]} src={imageSrc} />
    </div>
  );
}
