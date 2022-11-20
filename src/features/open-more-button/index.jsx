import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import Button from "@/shared/ui-kit/button";
export default function OpenMoreButton({ to = "" }) {
  return (
    <Link to={to}>
      <div className={styles["button-wrapper"]}>
        <div className={styles["button-wrapper__content"]}>
          <Button enableArrow>
            <span className={styles["button-text"]}>подробнее</span>
          </Button>
        </div>
      </div>
    </Link>
  );
}
