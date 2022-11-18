import styles from "./styles.module.scss";
import presentImg from "@/shared/assets/present-img.png";
export default function PresentBlock() {
  return (
    <div className={styles["present-block"]}>
      <img
        className={styles["present-block__background"]}
        src={presentImg}
        alt="church"
      />
      <div className={styles["present-block__heading"]}>
        <div className={styles["church-heading"]}>
          <h1 className={styles["church-heading__name"]}>
            Храм Николая Чудотворца
          </h1>
          <h3 className={styles["church-heading__title-line"]}>
            Г. РОСТОВ ВЕЛИКИЙ
          </h3>
          <h3 className={styles["church-heading__title-line"]}>
            УЛ. ГОГОЛЯ 13А
          </h3>
        </div>
      </div>
    </div>
  );
}
