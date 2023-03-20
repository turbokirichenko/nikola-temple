import styles from "./styles.module.scss";
import presentImgBlurMin from "@/shared/assets/present-img-blur-min.png";
import presentImg from "@/shared/assets/present-img.png";
import LazyImage from "../../../features/lazy-image";

export default function PresentBlock() {
  return (
    <div className={styles["present-block"]}>
      <div className={styles["present-block__background"]}>
        <LazyImage
          src={presentImgBlurMin}
          loadSrc={presentImg}
          alt="church image"
        />
      </div>
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
