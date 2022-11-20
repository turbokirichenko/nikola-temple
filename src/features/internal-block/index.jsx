import styles from "./styles.module.scss";
export default function InternalBlock({ children, icons = [] }) {
  const enableImages = Boolean(icons.length);
  return (
    <div className={styles["internal-block"]}>
      <div className={styles["internal-block__content"]}>{children}</div>
      {enableImages && (
        <div className={styles["internal-block__images-column"]}>
          <div className={styles["images"]}>
            {icons.map((image, index) => (
              <img
                className={styles["images__source"]}
                src={image}
                alt="about"
                key={index}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
