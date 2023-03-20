import styles from "./styles.module.scss";
export default function ImagesGrid({ images = [] }) {
  return (
    <div className={styles["images-grid"]}>
      <div className={styles["images-grid__content"]}></div>
    </div>
  );
}
