import styles from "./styles.module.scss";
import { AUTHOR_LINK } from "./constants";

export default function AuthorBlock({}) {
  return (
    <div className={styles["author-block"]}>
      <div className={styles["author-block__content"]}>
        <span className={styles["author-text"]}>
          created by{" "}
          <a className={styles["author-text__link"]} href={AUTHOR_LINK}>
            @turbokirichenko
          </a>
        </span>
      </div>
    </div>
  );
}
