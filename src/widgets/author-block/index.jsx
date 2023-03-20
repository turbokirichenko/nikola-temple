import styles from "./styles.module.scss";
import { AUTHOR_LINK } from "./constants";

export default function AuthorBlock({}) {
  return (
    <a
      target="_blank"
      className={styles["author-text__link"]}
      href={AUTHOR_LINK}>
      <div className={styles["author-block"]}>
        <div className={styles["author-block__content"]}>
          <span className={styles["author-text"]}>
            / created by @turbokirichenko
          </span>
        </div>
      </div>
    </a>
  );
}
