import styles from "./styles.module.scss";
import Button from "@/shared/ui-kit/button";
export default function OpenMoreButton() {
  return (
    <div className={styles["button-wrapper"]}>
      <div className={styles["button-wrapper__content"]}>
        <Button enableArrow>
          <span className={styles["button-text"]}>подробнее</span>
        </Button>
      </div>
    </div>
  );
}
